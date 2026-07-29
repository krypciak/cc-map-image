<!-- markdownlint-disable MD013 MD024 MD001 MD045 -->

# cc-map-image

<!-- [![CCModManager badge](https://raw.githubusercontent.com/CCDirectLink/CCModManager/refs/heads/master/icon/badge.png)](https://github.com/CCDirectLink/CCModManager) -->

Mod that automaticly finds all map files, screenshots them and saves them to a file.  
Building this mod and enabling it is not enough for it to work, there is an output path hardcoded in `src/plugin.ts` in the `run` function.  

## Building

```bash
git clone https://github.com/krypciak/cc-map-image
cd cc-map-image
pnpm install
pnpm run start
# this should return no errors (hopefully)
pnpm tsc
```
