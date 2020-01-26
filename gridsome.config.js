module.exports = {
  siteName: 'my resume',
  siteDescription: 'A starter project for Gridsome with Bootstrap for you to quickly build a resume.',
  plugins: [{
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-156593854-2'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}