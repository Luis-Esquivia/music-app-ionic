import { Injectable } from '@angular/core';
import * as daraArtists from './artistas.json';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  urlServer = 'https://music.fly.dev';

  constructor() {}

  getTracks() {
    return fetch(`${this.urlServer}/tracks`).then((response) =>
      response.json()
    );
  }

  getAlbums() {
    return fetch(`${this.urlServer}/albums`).then((response) =>
      response.json()
    );
  }

  getArtists() {
    return fetch(`${this.urlServer}/artists`).then((response) =>
      response.json()
    );
  }

  getLocalArtists() {
    return daraArtists.artists;
  }

  getSongsByAlbum(albumId: string) {
    return fetch(`${this.urlServer}/tracks/album/${albumId}`).then((response) =>
      response.json()
    );
  }

  getSongByArtists(artistId: string) {
    return fetch(`${this.urlServer}/tracks/artist/${artistId}`).then(
      (response) => response.json()
    );
  }

  giveLike(data: any) {
    return fetch(`${this.urlServer}/favorite_tracks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then((err) => Promise.reject(err));
      }
      return response.json();
    });
  }

  removeLike(favoriteId: number) {
    return fetch(`${this.urlServer}/favorite_tracks/${favoriteId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      if (!response.ok) {
        return Promise.reject('Error al eliminar favorito');
      }
      return true;
    });
  }

  getFavoritesByUser(userId: number): Promise<any[]> {
  return fetch(`${this.urlServer}/user_favorites/${userId}`)
    .then(async response => {
      if (!response.ok) {
        throw new Error('Error al obtener favoritos');
      }

      const text = await response.text();
      return text ? JSON.parse(text) : [];
    });
}

}
