module.exports = {
  publicPath: '/sora-4th-anniversary/',
  chainWebpack: config => {
    config.module
      .rule('csv')
      .test(/\.csv$/)
      .use('csv-loader')
      .loader('csv-loader')
      .options({
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true
      })
      .end()
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'ときのそら４周年プロジェクト'
        args[0].description = 'そらちゃんの４周年が来た！お祝いするために、僕たちは全世界からそらともの寄せ書きメッセージを書いて、色々な衣装を書いて、そしてウェブサイトを作りました！'
          + 'よかったら、是非是非見に来てください！'
          + 'To celebrate Sora\'s 4th Anniversary, from all over the world we\'ve collected messages, drew various of Sora\'s outfits, and made a website! Please feel free to come check it out!'
        args[0].image = 'https://raywarthog.github.io/sora-4th-anniversary/cover.jpg'
        return args
      })
  }
}
