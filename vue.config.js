module.exports = {
  devServer: { disableHostCheck: true },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      customFileProtocol: './',
      builderOptions: {
        appId: "weektodo-app.netlify.app",
        productName: "WeekToDo",
        publish: ["github"],
        linux: {
          category: "Utility",
          description: "Free and Open Source Minimalist Weekly Planner and To Do list App focused on privacy.",
          target: ["deb", "rpm", "pacman", "AppImage"],
          icon: "build/icon.icns",
        },
        win: {
          target: ["nsis","msi"],
        },
        mac: {
          category: "public.app-category.productivity",
          target: ["dmg", "pkg"],
        },
      },
    },
  }
};
