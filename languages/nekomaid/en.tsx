import React from 'react'
import minecraft from '../minecraft/en_us.json'
import type { Language } from '../index'

const lang: Language = {
  minecraft,
  underlineName: 'en',
  muiName: 'enUS',
  tip: 'Tip',
  noData: 'No Data',
  pluginUpdate: 'An update founded, it is recommended to use the newer version!',
  wrongToken: 'Incorrect token!',
  reconnect: 'Reconnecting...',
  disconnected: 'Disconnected!',
  failedToConnect: 'Failed to connect!',
  actionSuccess: 'Success!',
  actionFailed: 'Failed!',
  inputValue: 'Input the value to be modified',
  invalidValue: 'Invalid value!',
  history: 'History',
  unknown: 'unknown',
  more: 'More...',
  refresh: 'Refresh',
  reason: 'Reason',
  operations: 'Operations',
  unrecoverable: 'UNRECOVERABLE!',
  status: 'Status',
  username: 'Username',
  world: 'World',
  data: 'Data',
  info: 'Information',
  unsupported: 'Unsupported!',
  plugin: 'Plugin',
  others: 'Others',
  size: 'Size',
  ms: 'ms',
  secound: 's',
  cause: 'Cause',
  itemEditor: {
    title: 'Item Editor',
    itemType: 'type',
    unknownEnchantment: 'unknown enchantment',
    baseAttribute: 'Attributes',
    count: 'Amount',
    damage: 'Damage',
    displayName: 'Display Name',
    lore: 'Lore',
    newEnchantment: 'Add a new enchantment',
    newEnchantmentTitle: 'Enchantment',
    level: 'Level',
    clone: 'Clone'
  },
  serverSwitch: {
    title: 'Connect to server',
    noServer: 'Not connected to any server yet',
    wrongHostname: 'The hostname inputted is invalid',
    content: 'Choose or input the server address to be connected',
    connect: 'CONNECT'
  },
  time: {
    day: 'd ',
    hour: 'h ',
    minute: 'm ',
    second: 's'
  },
  config: {
    title: 'Configuration',
    args: 'VM Options',
    isAikarFlags: "Using Aikar's flags",
    serverConfig: 'Server Configuration',
    maxPlayers: 'Max Players',
    spawnRadius: 'Spawn Radius',
    whitelist: 'Whitelist',
    motd: 'MOTD',
    theme: 'Theme',
    light: 'LIGHT',
    system: 'AUTO',
    dark: 'DARK',
    javaVersion: 'Java Version',
    manufacturer: 'Manufacturer',
    model: 'Model',
    operatingSystem: 'OS',
    virtualMachine: 'VM',
    cpu: 'CPU',
    pid: 'PID',
    javaCount: 'Number of Java Processes'
  },
  terminal: {
    title: 'Terminal',
    fatal: 'FATAL',
    error: 'ERROR',
    warn: 'WARN',
    info: 'INFO',
    debug: 'DEBUG',
    trace: 'TRACE',
    expand: 'EXPAND',
    fold: 'FOLD',
    sharing: 'Sharing...',
    confirmShare: 'Are you sure to share the log?',
    command: 'Command'
  },
  dashboard: {
    title: 'Dashboard',
    onlinePlayers: 'Players',
    confirmKick: (name: any) => <>Kick {name} from server?</>,
    version: 'Version',
    updateChecking: 'Update checking...',
    updateFailed: 'Failed to fetch update, click here to retry',
    updated: 'Already up-to-date',
    lastHour: 'compare to last hour',
    mspt: 'MSPT',
    uptime: 'Uptime',
    memory: 'Memory Usage',
    playersDistribution: 'Player Geo Mapping',
    behinds: (version: number) => `It is already ${version} versions behind the newest!`
  },
  files: {
    title: 'Files',
    wrongName: 'Invalid file name!',
    exists: 'File already exists!',
    compress: 'Compress',
    decompress: 'Decompress',
    compressName: 'Input name for compressed file',
    unsupportedFormat: 'File format is unsupported',
    notExists: 'File does not exist',
    tooBig: 'File is too large!',
    editor: 'Editor',
    newFile: 'New',
    createFile: 'New File',
    createFolder: 'New Folder',
    dialogContent: 'Input file name:',
    invalidName: 'Invalid file name!',
    rename: 'Rename',
    undo: 'Undo',
    redo: 'Redo',
    save: 'Save',
    delete: 'Delete',
    copy: 'Copy',
    paste: 'Paste',
    upload: 'Upload',
    download: 'Download',
    pasting: 'Pasting...',
    uploading: 'Uploading...',
    downloading: 'Downloading...',
    compressing: 'Compressing...',
    uncompressing: 'Decompressing...',
    notSelected: 'Choose the file to be edited from left first!',
    filesList: 'Files List',
    uploadTooBig: 'File exceed 128MB!',
    confirmDelete: (file: any) => <>Are you sure to delete {file} ?</>
  },
  openInv: {
    title: 'Inventory',
    notSelected: 'Select a player first!',
    whosBackpack: (name: string) => name + "'s inventory",
    whosEnderChest: (name: string) => name + "'s enderchest"
  },
  playerList: {
    title: 'Players',
    details: 'Details',
    hasNotPlayed: 'Player has not joined the server yet.',
    banned: 'Banned',
    whitelisted: 'Whitelisted',
    op: 'Operator',
    firstPlay: 'First Play at',
    lastPlay: 'Last Play at',
    tnt: 'TNT Placed Amount',
    nameToSearch: 'Input the name to be searched:',
    clickToAddWhitelist: 'Click to add to the whitelist',
    clickToRemoveWhitelist: 'Click to remove from the whitelist',
    clickToBan: 'Click to ban the player',
    clickToPardon: 'Click to pardon (un-ban) the player',
    whosDetails: (name: string) => name + "'s details",
    confirmBan: (name: any) => <>Are you sure to ban {name} ?</>,
    confirmPardon: (name: any) => <>Are you sure to pardon (un-ban) {name} ?</>,
    confirmAddWhitelist: (name: any) => <>Are you sure to add {name} to the whitelist?</>,
    confirmRemoveWhitelist: (name: any) => <>Are you sure to remove {name} from the whitelist?</>
  },
  plugins: {
    title: 'Plugins',
    enable: 'Enable',
    name: 'Name',
    version: 'Version',
    author: 'Author(s)',
    description: 'Description',
    enablePlugin: 'ENABLE',
    disableForever: 'Disable Forever',
    delete: 'DELETE',
    dependency: 'Dependency',
    categories: ['Enabled', 'Disabled', 'Optional', 'Lacked Dependent'],
    confirmDelete: (name: any) => <>Are you sure to delete plugin {name} ?</>
  },
  scheduler: {
    title: 'Tasks',
    newTask: 'New Task',
    confirmDelete: 'Are you sure to remove this task?',
    editor: 'Editor',
    content: 'Commands or Messages',
    notSelected: 'Select a task from left first!',
    timer: 'Timer',
    name: 'Name',
    whenIdle: 'When idle (NO PLAYER)'
  },
  vault: {
    title: 'Vault',
    whosPermissionGroup: (name: string) => name + "'s permission groups",
    editorTitle: 'Permissions',
    permissionInput: 'Input the permission to be searched',
    permission: 'permission',
    removePermission: 'REMOVE',
    addPermission: 'ADD',
    permissionGroup: 'Permission groups',
    groupName: 'Name',
    defaultGroup: 'Default group',
    prefix: 'Prefix',
    suffix: 'Suffix',
    balance: 'Balance',
    managePermissionGroup: 'Permission Group Manage',
    managePermission: 'Permission Manage'
  },
  worlds: {
    title: 'Worlds',
    name: 'Name',
    alias: 'Alias',
    players: 'Players',
    chunks: 'Chunks',
    entities: 'Entities',
    tiles: 'Tiles',
    time: 'Time',
    weather: 'Weather',
    save: 'SAVE NOW',
    allowAnimals: 'Allow Animals',
    allowMonsters: 'Allow Monsters',
    allowFlight: 'Allow Flight',
    autoHeal: 'Auto Heal',
    hunger: 'Hunger',
    viewDistance: 'View Distance'
  },
  entityEditor: {
    title: 'Entity',
    customName: 'Custom Name',
    customNameVisible: 'Custom Name Visible',
    glowing: 'Glowing',
    gravity: 'Gravity',
    invulnerable: 'Invulnerable',
    silent: 'Silent',
    container: 'Inventory'
  },
  blockEditor: {
    title: 'Block',
    container: 'Inventory'
  },
  codeMirrorPhrases: { } as any,
  profiler: {
    title: 'Profiler',
    entities: 'Entities',
    threads: 'Threads',
    heap: 'HEAP',
    summary: 'SUMMARY',
    plugins: 'Plugin Consumed',
    pluginsTitle: 'Plugin Consumed (in 30 seconds)',
    notStarted: 'Profiler is not yet enabled, click the bottom-right button to start',
    cpu: 'System CPU Usage',
    readsAndWrites: 'I/O',
    network: 'Network',
    reads: 'Reads',
    writes: 'Writes',
    recv: 'Received',
    sent: 'Sent',
    temperature: 'CPU Temperature',
    cores: 'CPU Usage per Core',
    timingsCount: 'Count',
    count: 'Count',
    loadAndUnloadChunks: 'Chunk Loaded/Unloaded',
    chunkLoads: 'Loaded',
    chunkUnoads: 'Unloaded',
    entitiesTick: 'Entity Handled',
    tilesTick: 'Block Tile Handled',
    timingsNotStarted: 'Timings has not been enabled',
    className: 'Class Name',
    classLoader: 'Class Loader',
    threadName: 'Thread Name',
    state: 'State',
    stack: 'Stack',
    lock: 'Lock',
    action: 'Action',
    costTime: 'Time Consumed',
    ofTick: 'of Tick',
    carbageCollection: 'GC',
    memoryUsage: 'Memory Usage',
    memoryUsageTypes: ['After', 'Before'],
    serverThread: 'Server Main Thread',
    gcTime: 'GC Duration',
    gcCount: 'GC Count',
    crowdEntities: 'Chunk with Crowded Entities',
    crowdTiles: 'Chunk with Crowded Block Tiles',
    globalEntities: 'Server-wide Entities',
    globalTiles: 'Server-wide Block Tiles',
    events: 'Events',
    tasks: 'Tasks',
    commands: 'Commands',
    lagTime: 'Total Time',
    avgTime: 'Average Time',
    pluginsEventsTime: 'Events Handle Duration',
    pluginsTasksTime: 'Tasks Handle Duration',
    pluginsCommandsTime: 'Commands Handle Duration',
    threadState: { } as any
  }
}

export default lang