<script lang="ts" setup>
import { NAlert, NSpace, NTable, NInput, NButton, NSelect, NThead, NTbody, NTh, NTd, NTr } from 'naive-ui';
import { ref, reactive } from 'vue';

const url = new URL(window.location.href);

const data = reactive({
  client_id: "",
  client_secret: "",
  access_token: url.searchParams.get("access_token") || "",
  refresh_token: "",
})

const way = ref<"access_token" | "refresh_token">("access_token")

interface Token {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  error: string;
  error_description: string;
}

interface Album {
  albums: {
    id: string,
    title: string,
    productUrl: string,
    coverPhotoBaseUrl: string,
    coverPhotoMediaItemId: string,
    isWriteable: string,
    mediaItemsCount: string
  }[];
  nextPageToken: string;
  error: {
    code: number,
    message: string,
    status: string,
  };
}

const token = ref<Token>();
const album = ref<Album>();
let albums = ref<Album['albums']>([]);

const getToken = async () => {
  const params = new URLSearchParams();
  params.append("client_id", data.client_id);
  params.append("client_secret", data.client_secret);
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", data.refresh_token);

  fetch("https://www.googleapis.com/oauth2/v4/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  })
    .then((resp) => resp.json())
    .then((res) => {
      console.log(res);
      token.value = res
      if (typeof (res.error) == 'undefined' || !res.error) {
        data.access_token = res.access_token
        if (typeof (res.access_token) != 'undefined' && res.access_token)
          getAlbum(null)
      }
    });
};

const getAlbum = async (nextPageToken) => {
  if (nextPageToken == null)
    nextPageToken = ""

  fetch(`https://photoslibrary.googleapis.com/v1/albums?pageToken=${nextPageToken}&pageSize=50`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${data.access_token}`,
    },
  })
    .then((resp) => resp.json())
    .then((res) => {
      console.log(res);
      album.value = res;
      if (typeof (res.error) == 'undefined' || !res.error) {
        albums.value = albums.value.concat(res.albums)
        console.log(albums);
        if (typeof (res.nextPageToken) != 'undefined' && res.nextPageToken) {
          getAlbum(res.nextPageToken)
        }
      }
    });
};

// auto get
if (data.access_token) {
  getAlbum(null)
}

function fetchAlbum() {
  albums.value = []
  if (way.value == 'refresh_token')
    getToken()
  else
    getAlbum(null)
}

</script>

<template>
  <NSpace vertical size="large">
    <NSelect v-model:value="way" size="large" :options="[
      { label: 'Access token', value: 'access_token' },
      { label: 'Client & Refresh token', value: 'refresh_token' }
    ]" />
    <NSpace v-if="way == 'refresh_token'" vertical size="large">
      <h4>client_id</h4>
      <NInput size="large" v-model:value="data.client_id" />
      <h4>client_secret</h4>
      <NInput size="large" v-model:value="data.client_secret" />
      <h4>refresh_token</h4>
      <NInput size="large" v-model:value="data.refresh_token" />
    </NSpace>
    <NSpace v-else vertical size="large">
      <h4>access_token</h4>
      <NInput size="large" v-model:value="data.access_token" />
    </NSpace>

    <NButton size="large" type="primary" block @click="fetchAlbum">Fetch Album</NButton>
    <NAlert :title="token?.error" v-if="token?.error || token?.error_description" type="error">
      {{ token?.error_description }}
    </NAlert>
    <NAlert :title="album?.error.status" v-if="album?.error" type="error">
      {{ album?.error.message }}
    </NAlert>
    <h4>Albums</h4>
    <NTable size="large">
      <NThead>
        <NTr>
          <NTh>Album Title</NTh>
          <NTh>Album ID</NTh>
        </NTr>
      </NThead>
      <NTbody>
        <NTr v-for="(item, _) in albums">
          <NTd>{{ item.title }}</NTd>
          <NTd>{{ item.id }}</NTd>
        </NTr>
      </NTbody>
    </NTable>
  </NSpace>
</template>

<style scoped>
h4,
h3 {
  margin: 0;
}

td {
  word-break: break-all;
  word-wrap: break-word;
}
</style>