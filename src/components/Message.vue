<template>
  <div class="message-card">
    <div class="message-card-top">
      <div class="message-card-sender">
        <div class="sender-left">
          <div class="decor"></div>
          <div class="sender-name">{{ message.name }}</div>
          <div class="sender-twitter">{{ message.twitter }}</div>
        </div>
      </div>
      <div v-if="message.country_code" class="flag-icon-container">
        <span :class="'flag-icon flag-icon-'+message.country_code" :title=message.country_name :alt=message.country_name></span>
      </div>
    </div>
    <div class="message-card-bottom">
      <div class="message-card-message"><p :lang=message.lang>{{ message.message }}</p></div>
      <template v-if=message.submessage>
        <hr>
        <div class="message-card-message"><p lang="ja">{{ message.submessage }}</p></div>
      </template>
    </div>
  </div>
</template>

<script>
import 'flag-icon-css/css/flag-icon.css'
export default {
  name: 'Message',
  props: {
    message: Object
  }
}
</script>

<style scoped>
.blur {
  filter: blur(30px);
}

.message-card {
  background-color: white;
  margin: 1rem;
  width: calc(100% - 1.5rem - 10px);
}

.decor {
  background-image: url('~@/assets/decor.png');
  background-size: contain;
  width: 50px;
  height: 30px;
  float: right;
  background-repeat: no-repeat;
}

.image-container {
  display: flex;
  justify-content: center;
}

.video-container {
  display: flex;
  justify-content: center;
}

.video-inner-wrapper {
  display: flex;
  flex-direction: column;
}

.image-inner-wrapper {
  display: flex;
  flex-direction: column;
}

.message-card-sender {
  font-family: 'Noto Sans JP';
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sender-left {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.message-card-sender .sender-name {
  font-size: 1.5rem;
  font-weight: 700;
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  padding-left: 5px;
  padding-right: 5px;
}

.message-card-sender .sender-twitter {
  font-size: 1rem;
  /* font-style: italic; */
  /* white-space: nowrap; */
  text-overflow: ellipsis;
  font-family: 'Noto Sans JP';
  font-weight: 300;
  color: #8E8BA5;
}

hr {
  border-top: 3px solid #352F6F;
}

.message-card-message {
  font-family: 'Noto Sans JP',cursive;
  font-size: 1.25rem;
}

.message-card-message p {
  font-family: 'Noto Sans JP',cursive;
  font-size: 1.25rem;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  word-break: break-word;
}

img {
  max-height: 100%;
  max-width: 100%;
}

.message-card-top {
  padding: 10px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-wrap: wrap; */
  background-color: #352F6F;
}

.message-card-bottom {
  padding: 1.5rem;
  padding-top: 0;
}

.flag-icon {
  font-size: 1.75rem;
  box-shadow: 0 0 5px #000;
}

@media (min-width:801px)  {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  .message-card {
    width: calc(50% - 1.5rem - 10px);
  }
}
@media (min-width:1025px) {
  /* big landscape tablets, laptops, and desktops */
  .message-card {
    width: calc(33% - 1.5rem - 10px);
  }
}
@media (min-width:1281px) {
  /* hi-res laptops and desktops */
  .message-card {
    width: calc(25% - 1.5rem - 10px);
  }
}
</style>
