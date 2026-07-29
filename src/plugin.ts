import { PluginClass } from 'ultimate-crosscode-typedefs/modloader/mod'
import ccmod from '../ccmod.json'
import { Mod1 } from './types'

function godmode(model: sc.PlayerModel = sc.model.player) {
    // @ts-expect-error
    Object.keysT = Object.keys as any

    sc.stats.statsEnabled = true

    /* prettier-ignore  */
    /* add all party members */ sc.party.onStoragePreLoad!({ party: { models: { Lea: { level: 1, equipLevel: 0, exp: 0, spLevel: 2, allElements: false, temporary: false, noDie: false }, Shizuka: { level: 75, equipLevel: 74, exp: 0, spLevel: '4', allElements: false, temporary: false, noDie: false }, Shizuka0: { level: 1, equipLevel: 0, exp: 0, spLevel: 2, allElements: false, temporary: false, noDie: false }, Emilie: { level: 76, equipLevel: 74, exp: 856, spLevel: '4', allElements: false, temporary: false, noDie: false }, Sergey: { level: 1, equipLevel: 0, exp: 0, spLevel: 2, allElements: false, temporary: false, noDie: false }, Schneider: { level: 74, equipLevel: 74, exp: 412, spLevel: '4', allElements: false, temporary: false, noDie: false }, Schneider2: { level: 60, equipLevel: 59, exp: 795, spLevel: '3', allElements: true, temporary: false, noDie: false }, Hlin: { level: 75, equipLevel: 0, exp: 123, spLevel: 2, allElements: false, temporary: false, noDie: false }, Grumpy: { level: 76, equipLevel: 0, exp: 745, spLevel: 2, allElements: false, temporary: false, noDie: false }, Buggy: { level: 75, equipLevel: 28, exp: 951, spLevel: 2, allElements: false, temporary: false, noDie: false }, Glasses: { level: 76, equipLevel: 74, exp: 284, spLevel: '4', allElements: false, temporary: false, noDie: false }, Apollo: { level: 75, equipLevel: 74, exp: 512, spLevel: '4', allElements: false, temporary: false, noDie: false }, Joern: { level: 74, equipLevel: 74, exp: 123, spLevel: '4', allElements: false, temporary: false, noDie: false }, Triblader1: { level: 41, equipLevel: 30, exp: 118, spLevel: 2, allElements: false, temporary: false, noDie: false }, Luke: { level: 73, equipLevel: 69, exp: 951, spLevel: '4', allElements: false, temporary: false, noDie: false }, triblader2: { level: 1, equipLevel: 0, exp: 0, spLevel: 4, allElements: false, temporary: false, noDie: false }, triblader3: { level: 1, equipLevel: 0, exp: 0, spLevel: 1, allElements: false, temporary: false, noDie: false }, triblader4: { level: 1, equipLevel: 0, exp: 0, spLevel: 1, allElements: false, temporary: false, noDie: false }, triblader5: { level: 1, equipLevel: 0, exp: 0, spLevel: 1, allElements: false, temporary: false, noDie: false }, }, currentParty: [], contacts: { Lea: { status: 0, online: true, locked: false }, Shizuka: { status: 2, online: true, locked: false }, Shizuka0: { status: 0, online: true, locked: false }, Emilie: { status: 2, online: true, locked: false }, Sergey: { status: 1, online: true, locked: false }, Schneider: { status: 2, online: true, locked: false }, Schneider2: { status: 0, online: true, locked: false }, Hlin: { status: 1, online: true, locked: false }, Grumpy: { status: 1, online: true, locked: false }, Buggy: { status: 1, online: true, locked: false }, Glasses: { status: 2, online: true, locked: false }, Apollo: { status: 2, online: true, locked: false }, Joern: { status: 2, online: true, locked: false }, Triblader1: { status: 0, online: true, locked: false }, Luke: { status: 2, online: true, locked: false }, triblader2: { status: 0, online: true, locked: false }, triblader3: { status: 0, online: true, locked: false }, triblader4: { status: 0, online: true, locked: false }, triblader5: { status: 0, online: true, locked: false }, }, strategies: { TARGET: 'WHATEVER', BEHAVIOUR: 'OFFENSIVE', ARTS: 'NORMAL' }, dungeonBlocked: false, lastAreaDungeon: false, }, } as any)

    // @ts-expect-error
    for (const k of Object.keysT(model.core)) {
        // @ts-expect-error
        model.core[k] = true
    }

    // model.setSpLevel(1)
    model.setSpLevel(4)
    sc.newgame.setActive(true)
    if (!sc.newgame.get('infinite-sp')) sc.newgame.toggle('infinite-sp')
    model.setLevel(99)
    model.equip = { head: 657, leftArm: 577, rightArm: 607, torso: 583, feet: 596 }

    model.skillPoints.fill(200)

    /* prettier-ignore */
    const branchA = [0, 1, 2, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 33, 35, 36, 37, 38, 39, 40, 41, 42, 44, 46, 48, 49, 50, 51, 52, 53, 54, 55, 57, 59, 61, 62, 63, 65, 67, 69, 70, 71, 72, 74, 76, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 91, 93, 95, 97, 99, 101, 103, 104, 105, 106, 107, 108, 109, 110, 111, 113, 115, 117, 118, 120, 122, 124, 125, 126, 128, 130, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 145, 147, 149, 151, 153, 155, 156, 157, 158, 160, 162, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 177, 179, 181, 183, 185, 187, 189, 190, 191, 192, 193, 194, 195, 196, 197, 199, 201, 203, 204, 206, 208, 210, 211, 212, 213, 214, 216, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 231, 233, 235, 236, 238, 240, 242, 243, 244, 245, 246, 248, 250, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 266, 268, 270, 272, 274, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 287, 289, 291, 293, 295, 297, 298, 299, 300, 302, 304, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 319, 321, 323, 324, 326, 328, 330, 331, 332, 334, 336, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 354, 356, 358, 360, 362, 364, 365, 366, 367, 368, 369, 370, 371, 373, 375, 377, 378, 379, 381, 383, 385, 386, 387, 388, 390, 392, 394, 395, 396, 397, 398, 399]
    const branch = branchA

    for (const i of branch) {
        // @ts-expect-error
        if (sc.skilltree.skills[i].statType == 'SPIKE_DMG') continue
        model.learnSkill(i)
    }
    model.skillPoints.fill(3)

    /* filter out circuit override givers */
    const skipItems = new Set([150, 428])
    for (let i = 0; i < sc.inventory.items.length; i++) {
        if (skipItems.has(i)) continue
        model.items[i] = 90
        model._addNewItem(i)
    }
    model.updateStats()

    /* disable new circuit tree animaition on first time circuit menu opening */
    const startCircuits = (((ig.vars.storage.menu ??= {}).circuit ??= {}).start ??= {})
    for (const element of Object.values(sc.ELEMENT)) {
        startCircuits[element] = true
    }

    /* disable circuit override popups */
    ;(ig.vars.storage.g ??= {}).gotCircuitOverride = 1

    /* unlock all areas */
    for (const area in sc.map.areas) sc.map.updateVisitedArea(area)
    /* unlock cargo ship area */
    sc.map.areas['cargo-ship'].condition = 'true'

    /* unlock all maps */
    for (const areaName in sc.map.areas) {
        const area = new sc.AreaLoadable(areaName)
        area.load(() => {
            for (const floor of area.data.floors) {
                for (const map of floor.maps) {
                    ig.vars.set(`maps.${map.path.toCamel().toPath('', '')}`, {})
                }
            }
        })
    }

    /* unlock all landmarks */
    for (const areaName in sc.map.areas) {
        const area = sc.map.areas[areaName]
        for (const landmarkName in area.landmarks) {
            ;((sc.map.activeLandmarks[areaName] ??= {})[landmarkName] ??= { active: true }).active = true
        }
    }

    /* add money */
    model.addCredit(1e7)

    ig.vars.storage.plot = { line: 999999999999999 }
}

let res: (() => void) | undefined

export default class MapImage implements PluginClass {
    static dir: string
    static mod: Mod1
    static manifset: typeof import('../ccmod.json') = ccmod

    constructor(mod: Mod1) {
        MapImage.dir = mod.baseDirectory
        MapImage.mod = mod
        MapImage.mod.isCCL3 = mod.findAllAssets ? true : false
        MapImage.mod.isCCModPacked = mod.baseDirectory.endsWith('.ccmod/')
    }

    prestart() {
        ig.Loader.inject({
            finalize() {
                // @ts-expect-error
                if (!this.gameClass) {
                    res?.()
                    res = undefined
                }
                this.parent()
            },
        })
        // @ts-expect-error
        ig.GlobalSettings.inject({
            // @ts-expect-error
            resolveEntitySettings(a, b) {
                return this.parent(a, b ?? {})
            },
        })

        sc.EnemyType.inject({
            onload(data) {
                try {
                    return this.parent(data)
                } catch (e) {}
            },
        })

        ig.MAP.Background.inject({
            preRenderChunk(...args) {
                if (this.tilesetName?.includes('parallax')) return args[4]
                return this.parent(...args)
            },
            preRenderScreen(...args) {
                if (this.tilesetName?.includes('parallax')) return
                return this.parent(...args)
            },
            drawAnimated(...args) {
                if (this.tilesetName?.includes('parallax')) return
                return this.parent(...args)
            },
            redrawChunkTile(...args) {
                if (this.tilesetName?.includes('parallax')) return
                return this.parent(...args)
            },
        })

        sc.Arena.inject({
            onVarAccess() {},
        })
    }

    async poststart() {
        run()
    }
}

const fs: typeof import('fs') = (0, eval)('require("fs")')
const path: typeof import('path') = (0, eval)('require("path")')

async function takeScreenshot() {
    ig.perf.gui = false
    ig.perf.lighting = false
    ig.perf.weather = false
    ig.perf.envParticles = false
    ig.game.addons.preUpdate.erase(sc.npcRunner)

    function hideEntity(entity: ig.Entity) {
        ig.game.shownEntities[entity.id] = null
    }

    var toKill = [
        ig.ENTITY.Enemy,
        sc.NpcRunnerSpawner,
        sc.NPCRunnerEntity,
        ig.ENTITY.NPC,
        ig.ENTITY.Chest,
        ig.ENTITY.EventTrigger,
        ig.ENTITY.EnemySpawner,
    ]
    ig.game.entities
        .filter(a => toKill.some(clazz => a instanceof clazz))
        .map(a => {
            hideEntity(a)
            a.kill()
        })

    ig.game.entities
        .filter(
            a =>
                a instanceof ig.ENTITY.ItemDestruct ||
                a instanceof ig.ENTITY.Destructible ||
                a instanceof ig.ENTITY.RegenDestruct
        )
        .forEach(entity => {
            // @ts-expect-error
            entity.blinkTimer = 10000000
            // @ts-expect-error
            entity.initAnimations()
            entity.updateSprites()
            entity.update()
        })
    ig.system.resize(ig.game.size.x, ig.game.size.y, 1)
    ig.ScreenBufferPool.clearBuffers()
    ig.game.playerEntity.setPos(ig.game.size.x / 2, ig.game.size.y / 2)
    hideEntity(ig.game.playerEntity)
    await wait(50)

    return ig.system.canvas.toDataURL()
}

async function findMaps() {
    const files: string[] = await fs.promises.readdir('assets/data/maps', { recursive: true })
    for (const ext of ['fish-gear', 'flying-hedgehag', 'post-game', 'scorpion-robo', 'snowman-tank']) {
        files.push(...(await fs.promises.readdir(`assets/extension/${ext}/data/maps`, { recursive: true })))
    }
    const maps = files.filter(a => a.endsWith('.json')).map(a => a.substring(0, a.length - '.json'.length))
    return maps
}

function wait(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const fileExists = async (path: string) => !!(await fs.promises.stat(path).catch(_e => false))

async function teleport(map: string) {
    async function tp(
        this: ig.Game,
        mapName: string,
        marker?: Nullable<ig.TeleportPosition>,
        hint?: ig.Game.TeleportLoadHint,
        clearCache?: Nullable<boolean>,
        reloadCache?: Nullable<boolean>
    ) {
        this.previousMap = this.mapName
        this.mapName = mapName
        this.marker = marker ? marker.marker : null
        this.teleporting.position = marker!
        this.teleporting.active = true
        // this.teleporting.timer = this.onTeleportStart(mapName, marker, hint)
        this.teleporting.clearCache = clearCache || false
        this.teleporting.reloadCache = reloadCache || false
        this.events.clearQueue()
        for (let i = 0; i < this.addons.teleport.length; ++i) this.addons.teleport[i].onTeleport(mapName, marker, hint)
        await preloadLevel.call(this, mapName)
    }

    async function preloadLevel(this: ig.Game, mapName: string) {
        this.teleporting.levelData = null
        this.currentLoadingResource = `LOADING MAP: ${mapName}`
        // window.IS_IT_CUBAUM = Math.random() < (sc.gameCode.isEnabled('regularTrees') ? 1 : 1e-4)
        let path = mapName.toPath(`${ig.root}data/maps/`, '.json') + ig.getCacheSuffix()

        const levelData = await new Promise<sc.MapModel.Map>((res, rej) => {
            $.ajax({
                dataType: 'json',
                url: ig.getFilePath(path),
                context: this,
                success(a) {
                    res(a)
                },
                error(mapName, c, e) {
                    rej()
                    ig.system.error(Error(`Loading of Map '${path}' failed: ${mapName} / ${c} / ${e}`))
                },
            })
        })

        const promise = new Promise<void>(resolve => {
            res = resolve
        })

        this.loadLevel(levelData, this.teleporting.clearCache, this.teleporting.reloadCache)
        // url: ig.getFilePath(a),
        // ig.system.error(Error(`Loading of Map '${a}' failed: ${mapName} / ${c} / ${e}`))

        console.log(ig.game.mapName, 'loaded, waiting for resource load')
        await promise
        console.log('done')
    }

    await tp.call(ig.game, map)
}

async function run() {
    let maps = await findMaps()
    // maps.splice(50, 100000)
    // maps = ['boss-test']
    const invalidMaps = new Set(['henne9001', 'text-copy', 'cargo-ship/puzzle-challenge', 'cargo-ship/room3'])
    maps = maps.filter(map => !invalidMaps.has(map))
    maps = maps.filter(map => !map.includes('test'))

    // maps = maps.filter(map => map.startsWith('rhombus-dng'))
    // maps = ['bergen-trail/path-2']
    console.log(maps)

    const basePath = '/home/krypek/Temp/maps'
    for (let i = 0; i < maps.length; i++) {
        const map = maps[i]
        // if (i == 0) ig.storage.loadSlot(9)
        if (i == 0) godmode()
        console.log(i, map, 'tping...')

        const pngPath = `${basePath}/${map}.png`
        if (await fileExists(pngPath)) continue

        await teleport(map)
        const data = await takeScreenshot()

        await fs.promises.mkdir(path.dirname(pngPath), { recursive: true })
        await fs.promises.writeFile(pngPath, data.replace(/^data:image\/png;base64,/, ''), 'base64')
        console.log(map, 'written')
    }
    console.log('done')
}
