The solution involves a clean reinstallation of Expo CLI and clearing of caches:

```bash
npm uninstall -g expo-cli
yarn global remove expo-cli
npm cache clean --force
yarn cache clean
npm install -g expo-cli --force // or yarn global add expo-cli
expo --version //Verify installation
```

After this, restart your Expo development server.  This approach addresses potential issues with corrupted installations or version conflicts that might prevent the CLI from loading necessary modules.