import React, { useMemo, useState } from 'react'
import socketIO from 'socket.io-client'
import darkScrollbar from '@material-ui/core/darkScrollbar'
import { useLocation, useHistory, Route, Redirect } from 'react-router-dom'
import { Divider, Box, List, ListItem, ListItemIcon, ListItemText, CssBaseline, AppBar,
  Typography, Drawer, Toolbar, IconButton, useMediaQuery } from '@material-ui/core'
import { createTheme, ThemeProvider, alpha } from '@material-ui/core/styles'

import { Build, Menu, Brightness4, Brightness7 } from '@material-ui/icons'
import { address, token } from './url'
import { Snackbars } from './toast'
import { typography } from './theme'
import PluginContext from './Context'
import Plugin from './Plugin'
import initPages from './pages/index'

export interface Page { title: string, component: React.ComponentType<any>, path: string, icon?: JSX.Element }

export const pages: Record<string, Page[]> = { }

export let update: React.Dispatch<number>

const drawerWidth = 240

let sent = false
let loc: ReturnType<typeof useLocation>
const App: React.FC<{ darkMode: boolean, setDarkMode: (a: boolean) => void }> = ({ darkMode, setDarkMode }) => {
  loc = useLocation()
  const history = useHistory()
  const [mobileOpen, setMobileOpen] = useState(false)
  update = useState(0)[1]
  const create = useMemo(() => {
    const io = socketIO(address!, { query: 'token=' + token })
    io.on('connect', () => {
      const his: Array<{ address: string, time: number }> = JSON.parse(localStorage.getItem('NekoMaid:servers') || '[]')
      const curAddress = address!.replace('http://', '') + '?' + token
      let cur = his.find(it => it.address === curAddress)
      if (!cur) his.push((cur = { address: curAddress, time: 0 }))
      cur.time = Date.now()
      const arr = loc.pathname.split('/')
      if (!sent && arr.length > 2) io.emit('switchPage', { page: arr[1], namespace: arr[0] })
      sent = true
      localStorage.setItem('NekoMaid:servers', JSON.stringify(his))
    })
    const map: Record<string, Plugin> = { }
    const fn = (name: string) => map[name] || (map[name] = new Plugin(io, name))
    initPages(fn('NekoMaid'))
    return fn
  }, [])

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  const routes: JSX.Element[] = []
  const mapToItem = (name: string, it: Page) => {
    const key = '/' + name + '/' + it.path
    routes.push(<PluginContext.Provider key={key} value={create(name)}><Route path={key} component={it.component} exact /></PluginContext.Provider>)
    return <ListItem
      sx={key === loc.pathname
        ? {
            fontWeight: 'bold',
            color: theme => theme.palette.primary.main,
            backgroundColor: theme => alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity) + '!important'
          }
        : undefined}
      button
      key={key}
      onClick={() => history.push(key)}
    >
      <ListItemIcon sx={key === loc.pathname ? { color: theme => theme.palette.primary.main } : undefined}>{it.icon || <Build />}</ListItemIcon>
      <ListItemText primary={it.title} />
    </ListItem>
  }

  const singlePages: JSX.Element[] = []
  const multiPagesPages: Array<JSX.Element | JSX.Element[]> = []
  let index = 0
  for (const name in pages) {
    if (pages[name].length === 1) singlePages.push(mapToItem(name, pages[name][0]))
    else {
      if (multiPagesPages.length) multiPagesPages.push(<Divider key={index++} />)
      multiPagesPages.push(pages[name].map(it => mapToItem(name, it)))
    }
  }
  if (singlePages.length) multiPagesPages.push(<Divider key={index++} />, singlePages)

  const drawer = (
    <div>
      <Toolbar />
      <Divider sx={{ display: { sm: 'none', xs: 'block' } }} />
      <List>{multiPagesPages.flat()}</List>
    </div>
  )

  return <Box sx={{ display: 'flex' }}>
    <CssBaseline />
    <AppBar position='fixed' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <Menu />
        </IconButton>
        <Typography variant='h3' noWrap component='div' sx={{ flexGrow: 1 }}>NekoMaid</Typography>
        <IconButton
          color='inherit'
          edge='end'
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
    <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant='temporary'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundImage: theme => theme.palette.mode === 'dark' ? 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))' : undefined
          }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundImage: theme => theme.palette.mode === 'dark' ? 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))' : undefined
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
    <Box component='main' sx={{ flexGrow: 1 }}>
      {routes}
      <Redirect path='*' to='/NekoMaid/dashboard' />
    </Box>
  </Box>
}

const AppWrap: React.FC = () => {
  const [darkMode, setDarkMode] = useState(useMediaQuery('(prefers-color-scheme: dark)'))
  const theme = React.useMemo(() => createTheme({
    typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: darkMode ? darkScrollbar() : null
        }
      }
    },
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: darkMode ? { default: '#212121', paper: '#212121' } : { default: '#f4f6f8', paper: '#fff' }
    }
  }), [darkMode])
  return <ThemeProvider theme={theme}>
    <Snackbars />
    <App darkMode={darkMode} setDarkMode={setDarkMode} />
  </ThemeProvider>
}

export default AppWrap
