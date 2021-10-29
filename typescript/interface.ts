interface Song {
    artistName: string;
}

interface Song {
    songName: string;
}

interface SongInterface {
    songName: string;
}

interface AlbumInterface {
    albumName: string;
}

// this is interface combine

const song: Song = {
    artistName: 'Freddie',
    songName: 'The Chain',
};

type SongType = SongInterface | AlbumInterface;

const typeSong: SongType = {
    songName: 'testing',
    albumName: 'asd',
};
