<template>
  <div class="gallery-item">
    <div class="gallery-item-desc">
      {{desc}}
    </div>
    <a :href=image class="gallery-item-link" :author=author :desc=desc :add_desc=add_desc :twitter=twitter>
      <img loading=lazy :src=image alt="" class="gallery-item-img">
    </a>
    <small class="author">
      <a :href=twitter target="_blank" v-if="twitter">
        イラスト：{{author}}
      </a>
      <template v-else>
        イラスト：{{author}}
      </template>
    </small>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    image: String,
    author: String,
    desc: String,
    twitter: String,
    add_desc: String
  }
}
</script>

<style scoped>
.gallery-item {
  background-color: white;
  width: calc(49% - 6px);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-color: #352F6F;
  border-style: solid;
  border-width: 3px;
  max-width: 500px;
  padding-bottom: 15px;
  padding-top: 15px;
}

.gallery-item-img {
  max-width: 100%;
  max-height:100%;
}

.gallery-item-desc {
  color: #000045;
  font-family: 'Big John', 'Noto Sans JP';
  font-weight: bold;
  font-size: 1.75rem;
  text-align: center;
  word-break: normal;

  font-size: 1rem;
}

.author {
  color: #000045;
  font-family: 'Big John', 'Noto Sans JP';
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;

  font-size: 1rem;
}

.author a {
  color: inherit;
}

.gallery-item-link {
  height: 200px;
}

@media (min-width: 769px) {
  .gallery-item {
    width: calc(32% - 6px);
  }

  .gallery-item-link {
    height: 300px;
  }


  .author {
    font-size: 1.25rem;
  }
  .gallery-item-desc {
    font-size: 1.75rem;
  }
}

@media (min-width: 1201px) {
  .gallery-item {
    width: calc(24% - 6px);
  }
  .gallery-item-link {
    height: 500px;
  }
}
</style>