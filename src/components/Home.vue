<template>
  <div id="home">
    <section id="title-sect" data-aos="fade-in">
      <div id="header">
        <div id="header-inner">
          <img src="~@/assets/header_text.png" alt="Tokino Sora 4th Anniversary">
        </div>
      </div>
      <div id="navigator">
        <div class="nav-item">
          <a href="#art-sect">ART</a>
          <a lang="ja" href="#art-sect">イラスト</a>
        </div>
        <div class="nav-item">
          <a href="#gallery-sect">GALLERY</a>
          <a lang="ja" href="#gallery-sect">ギャラリー</a>
        </div>
        <div class="nav-item">
          <a href="#msg-sect">MESSAGES</a>
          <a lang="ja" href="#msg-sect">メッセージ</a>
        </div>
        <div class="nav-item">
          <a href="#credits-sect">CREDITS</a>
          <a lang="ja" href="#credits-sect">クレジット</a>
        </div>
      </div>
      <div id="greetings-container">
        <div id="greetings-inner-wrapper">
          <div id="greetings">
            <p>ときのそらの４周年</p>
            <p>おめでどうございます！</p>
          </div>
        </div>
      </div>
    </section>

    <section id="art-sect">
      <div class="sect-title" data-aos="fade-in">
        ART
      </div>
      <div id="art-container" data-aos="fade-in">
        <a class="art-image" :href='require("@/assets/4th_anniv.png")'>
          <img
          src="~@/assets/4th_anniv.jpg"
          alt="">
        </a>
      </div>
    </section>

    <section id="gallery-sect">
      <div class="sect-title" data-aos="fade-in">
        GALLERY
      </div>
      <div id="gallery-container">
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/Arzee.png")' author='@Arzee' desc='2017 Original' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/Arzee_2.png")' author='@Arzee' desc='2017 2nd' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/winniet.png")' author='@winniet97' desc='2017 MC' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/Tennen_Vik.png")' author='@tennen_vik' desc='Halloween' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/SerenLink.png")' author='@SerenLink' desc='Yukino Sora' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/72maegami.png")' author='@72maegami' desc='Stage' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/777Blackcape.png")' author='@777blackcape' desc='Idol' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/Cieluscian.png")' author='@cieluscian' desc='My Loving 2020' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/Cobalnite.png")' author='@cobalnite' desc='Modern' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/kaizeshu.png")' author='@kaizeshu' desc='Valentines' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/kyutobirb.png")' author='@kyutobirb' desc='Swimsuit' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/neriko.png")' author='@neriko_official' desc='Casual' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/neriko_2.png")' author='@neriko_official' desc='Hololive Error' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/vichyn.jpg")' author='@vichyn5' desc='Hololive Error' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/vichyn_2.jpg")' author='@vichyn5' desc='Yukino Sora' />
        <GalleryItem data-aos="fade-in" :image='require("@/assets/gallery/minnijay.png")' author='@_MinniJay_' desc='Watanuki' />
        
      </div>
    </section>

    <section id="msg-sect">
      <div class="sect-title" data-aos="fade-in">
        MESSAGES
      </div>
      <div id="message-container">
        <template v-for="message in messages" :key="message.idx">
          <Message data-aos="fade-in" :message="message"/>
        </template>
      </div>
    </section>

    <section id="credits-sect">
      <div class="sect-title">
        CREDITS
      </div>
      <div id="credits">
        <div class="credit-row">
          <div class="credit-title">Art</div>
          <div class="credit-names">
            <ul>
              <li><a target="_blank" href="https://twitter.com/777blackcape">@777blackcape</a></li>
              <li><a target="_blank" href="https://twitter.com/cieluscian">@cieluscian</a></li>
              <li><a target="_blank" href="https://twitter.com/cobalnite">@cobalnite</a></li>
              <li><a target="_blank" href="https://twitter.com/kaizeshu">@kaizeshu</a></li>
              <li><a target="_blank" href="https://twitter.com/kyutobirb">@kyutobirb</a></li>
              <li><a target="_blank" href="https://twitter.com/neriko_official">@neriko_official</a></li>
              <li><a target="_blank" href="https://twitter.com/serenlink">@serenlink</a></li>
              <li><a target="_blank" href="https://twitter.com/tennen_vik">@tennen_vik</a></li>
              <li><a target="_blank" href="https://twitter.com/vichyn5">@vichyn5</a></li>
              <li><a target="_blank" href="https://twitter.com/winniet97">@winniet97</a></li>
              <li><a target="_blank" href="https://twitter.com/_minnijay_">@_MinniJay_</a></li>
              <li><a target="_blank" href="https://twitter.com/72maegami">@72maegami</a></li>
              <li>Arzee</li>
              <li>how dee#6158</li>
            </ul>
          </div>
        </div>
        <div class="credit-row">
          <div class="credit-title">Translation</div>
          <div class="credit-names">
            <ul>
              <li>Candy#1839</li>
              <li>Xclan#1451</li>
              <li>Cobalnite#9147</li>
              <li>CrabNGarlicButter#0287</li>
              <li>Ralf#0206</li>
              <li>SleepingUsagi#1315</li>
              <li>Apai#8081</li>
              <li>★そらちゃん～★#5549</li>
              <li>BaKamen#6235</li>
              <li>Krim#0573</li>
              <li>sayaka#4163</li>
              <li>Skk#0135</li>
            </ul>
          </div>
        </div>
        <div class="credit-row">
          <div class="credit-title">Website</div>
          <div class="credit-names">
            <ul>
              <li><a target="_blank" href="https://github.com/RayWarthog">Warthog#6554</a></li>
            </ul>
          </div>
        </div>
        <div class="credit-row">
          <div class="credit-title">MISC</div>
          <div class="credit-names">
            <ul>
              <li>Malv#0574</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Message from '@/components/Message.vue'
import MessagesCSV from '@/assets/messages.csv'

import $ from 'jquery'
import 'magnific-popup/dist/jquery.magnific-popup'
import GalleryItem from '@/components/GalleryItem.vue'

import Masonry from 'masonry-layout'
import AOS from 'aos'

const countries = require('i18n-iso-countries')
countries.registerLocale(require('i18n-iso-countries/langs/en.json'))
countries.registerLocale(require('i18n-iso-countries/langs/ja.json'))

export default {
  name: 'Home',
  components: {
    GalleryItem,
    Message
  },
  data: () => {
    const filteredMessages = []
    MessagesCSV.map(
      (record, idx) => {
        const filteredRecord = {
          idx: idx,
          name: record.name,
          twitter: record['twitter'],
          country_code: null,
          country_name: null,
          message: null,
          submessage: null,
          lang: null
        }
        if (record.message) {
          filteredRecord.message = record.message
          if (record['JP Translation']) {
            filteredRecord.submessage = record['JP Translation']
          }
          const jpCharacters = filteredRecord.message.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/)
          if (jpCharacters !== null) {
            filteredRecord.lang = 'ja'
          }
        }
        // if (record['Video Submission (Accepted/Pending/Rejected/NONE)'] === 'Accepted' && record['Youtube ID']) {
        //   filteredRecord.youtube_id = record['Youtube ID']
        //   filteredRecord.has_media = true
        // }
        if (record['country']) {
          const country = record['country']
          const countryCode = countries.getAlpha2Code(country, 'en')
          if (countryCode) {
            filteredRecord.country_code = countryCode.toLowerCase()
            filteredRecord.country_name = countries.getName(countryCode, 'en') + ' / ' + countries.getName(countryCode, 'ja')
          }
        }
        if (!filteredRecord.message) {
          return
        }
        filteredMessages.push(filteredRecord)
      }
    )
    return {
      messages: filteredMessages
    }
  },
  methods: {
    initMasonry () {
      this.masonry = new Masonry(
        document.querySelector('#message-container'),
        {
          itemSelector: '.message-card:not([style*="display: none"])',
          columnWidth: '.message-card',
          transitionDuration: 0
        }
      )
      this.masonry.on('layoutComplete', () => {
        if (this.aos) {
          this.aos.refresh()
        }
        this.$Progress.finish()
      })
      document.querySelectorAll('#msg-sect img').forEach(item => {
        item.addEventListener('load', () => {
          this.masonry.layout()
        })
      })
    },
    initAOS () {
      this.aos = AOS
      this.aos.init({
        disable: 'mobile',
        offset: 120,
        delay: 50,
        duration: 1000,
        mirror: true,
        once: false
      })
    },
    initMagnificPopup () {
      $('.art-image').magnificPopup({
        type: 'image',
        // gallery: {
        //   enabled: true
        // },
      })
      $('.gallery-item-link').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        },
        image: {
          titleSrc: function (item) {
            return item.el.attr('desc') + ' - ' + item.el.attr('author')
          }
        }
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initMagnificPopup()
      this.initMasonry()
      this.initAOS()
    })
  },
}
</script>

<style scoped>
#navigator a {
  text-decoration: none;
  color: inherit;
}

a {
  color: inherit;
}

#home {
  background-color: #B6BBF3;
  margin: 0;
  min-height: 100vh;
  height: 100%;
}

#title-sect {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#header {
  background-color: #352F6F;
  width: 100%;
  text-align: center;
  position: relative;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

#header-inner {
  border-top: 1rem solid #B6BBF3;
  border-bottom: 1rem solid #B6BBF3;
  width: 100%;
}

#header-inner img {
  max-width:100%;
  max-height:100%;
}

#navigator {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
}

.nav-item {
  color: #000045;
  font-family: 'Big John';
  font-size: 1.5rem;
  padding: 1rem;
}

.nav-item a {
  display: block;
  text-align: center;
}

.nav-item :lang(ja) {
  font-family: 'Noto Sans JP';
  font-weight: 500;
}

#greetings-container {
  background-color: #352F6F;
  width: 100%;
  display: flex;
  justify-content: center;
}

#greetings-inner-wrapper {
  background-image: url('~@/assets/soraSmallerRes.png');
  background-position-x: right;
  background-size: 30vw;
  background-repeat: no-repeat;
  padding: 2rem;
}

#greetings {
  color: white;
  font-family: 'Noto Sans JP';
  font-weight: 500;
  text-align: center;
  font-size: 2rem;
  padding-right: 30vw;
}

#greetings p {
  margin: 0;
}

.sect-title {
  text-align: center;
  color: #000045;
  font-family: 'Big John';
  font-size: 1.5rem;
  height: 25vh;
  display:flex;
  align-items: center;
  justify-content: center;
}

#art-container {
  background-color: #858CF6;
  display: flex;
  justify-content: center;
  padding:1rem;
}

.art-image img {
  width: 100%;
  /* padding: 25px; */
  height: 100%;
  max-width: 1280px;
}

#gallery-container {
  background-color: #858CF6;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

#credits-sect {
  background-color: #352F6F;
  color: white;
  padding: 20px;
}

.credit-title {
  font-family: "Big John";
  text-align: center;
}

.credit-row {
  padding-bottom: 20px;
}

#credits-sect ul {
  list-style-type: none;
  font-family: "Slim Joe";
  color: #8E8BA5;
  padding: 0;
  margin: 0;
}

#credits-sect .sect-title {
  color: white;
  font-family: "Big John";
}

section {
  margin-top: 25vh;
}
section#title-sect {
  margin-top: 0;
}

@media (orientation: landscape) and (min-height: 768px) {
  #title-sect {
    height: 100vh;
  }
}

@media (orientation: portrait) and (min-height: 812px) {
  #title-sect {
    height: 100vh;
  }
}

@media (min-width: 481px) {
  .nav-item {
    font-size: 2rem;
  }
  .sect-title {
    font-size: 2rem;
  }
  #greetings {
    font-size: 3rem;
    padding-right: 250px;
  }
  #greetings-inner-wrapper {
    background-size: 250px;
  }
}

@media (min-width:801px)  {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  .credit-title {
    text-align: left;
  }
  .credit-row {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  #credits {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
<style src="magnific-popup/dist/magnific-popup.css"></style>
<style src="aos/dist/aos.css"></style>
