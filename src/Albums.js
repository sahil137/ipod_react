import React, { Component } from 'react';

class Albums extends Component {
  render() {
    return (
      <div style={styles.albumContainer}>
        <div style={styles.coverContainer}>
          <img
            style={styles.image}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6DLBVtnfizFKtaGDLgU7OQhbNjOLkhpqCw&usqp=CAU"
            alt="Album Cover"
          />
        </div>
        <div style={styles.coverContainer}>
          <img
            style={styles.image}
            src="https://i.pinimg.com/736x/4e/b4/f8/4eb4f8a7e04b57e74914fc46e013ac40.jpg"
            alt="Album Cover"
          />
        </div>
        <div style={styles.coverContainer}>
          <img
            style={styles.image}
            src="https://img.discogs.com/B2XchbHK2gzgMMxdv5H9X20NlzE=/fit-in/600x600/filters:strip_icc():format(webp):mode_rgb():quality(90)/discogs-images/R-16312464-1607002156-7911.jpeg.jpg"
            alt="Album Cover"
          />
        </div>
        <div style={styles.coverContainer}>
          <img
            style={styles.image}
            src="https://images.theconversation.com/files/258026/original/file-20190208-174861-nms2kt.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
            alt="Album Cover"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  albumContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  coverContainer: {
    width: '50%',
    height: '50%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
};

export default Albums;
