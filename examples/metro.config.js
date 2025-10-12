const { getDefaultConfig } = require('expo/metro-config');
// const exclusionList = require('metro-config/src/defaults/exclusionList');
const path = require('path');

// Helper to safely embed a path in RegExp
const escapeRegExp = (s) => s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '..');
const parentNodeModules = path.join(workspaceRoot, 'node_modules');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];

config.resolver = {
  ...config.resolver,
  nodeModulesPaths: [
    path.join(projectRoot, 'node_modules'),
  ],
  
  // Ignore common explosion points
  blockList: [
    new RegExp(`^${escapeRegExp(parentNodeModules)}[/\\\\].*`),

    // avoid triply nested node_modules to resolve issue with using a local copy of the module
    /.*\/node_modules\/.*\/node_modules\/.*\/node_modules\/.*/,

    // build artifacts
    /.*\/\.expo\/.*/,
    /.*\/\.turbo\/.*/,
    /.*\/\.next\/.*/,
    /.*\/coverage\/.*/,

    // VCS and caches
    /.*\/\.git\/.*/,
    /.*\/\.cache\/.*/,

    // optional: ignore example/demo apps in a monorepo
    // /.*\/examples\/.*
    // /.*\/example\/.*/,
    /.*\/e2e\/.*/,
  ],
  unstable_enableSymlinks: true,
  unstable_enablePackageExports: true,
};

module.exports = config;
