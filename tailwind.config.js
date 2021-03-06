// This file controls how Tailwind processes your CSS. For details, see
// https://tailwindcss.com/docs/configuration

module.exports = 
{
  //
  // WARNING: CodeKit overwrites all properties of the "purge" object (except those below) with values from the UI.
  // Visit [Project Settings > Tools > PurgeCSS] to specify content and options. The values below can be
  // uncommented and edited if needed; all others are controlled by CodeKit.
  //
  // purge: {
  //   preserveHtmlElements: true,
  //   layers: ['base', 'components', 'utilities']
  // },


  //
  // All other TailwindCSS options are 100% under your control. Edit this config file as shown in the Tailwind Docs
  // to enable the settings or customizations you need.
  // 
  theme: {
    extend: {
      colors: {
        'primary': '#5D737E',
 
        'secondary': '#30292F',
        'darkgray': '#30292F',
 
        'danger': '#e3342f',
 
      },
      spacing: {
        '100': '40rem',
      },
      flex: {
        '05': '0.4 0.4 0%',
      },
      borderRadius: {
        '4xl': '4.5rem',
      },
      backgroundImage: theme => ({

        'banner-1': "url('/build/assets/banner/banner_1.jpg')",

        'banner-2': "url('/build/assets/banner/banner_2.jpg')",
        'banner-3': "url('/build/assets/banner/banner_3.jpg')",
       })
    }
  },

  variants: {},

  //
  // If you want to run any Tailwind plugins (such as 'tailwindcss-typography'), simply install those into the Project via the
  // Packages area in CodeKit, then pass their names (and, optionally, any configuration values) here. 
  // Full file paths are not necessary; CodeKit will find them.
  //
  plugins: []
}