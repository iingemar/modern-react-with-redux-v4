import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// https://babeljs.io/repl

// https://console.developers.google.com/apis/credentials?project=modern-react-with-redux-v
const YOUTUBE_API_KEY = 'AIzaSyAeY6ehp-7Ty1xMsWyIS7qXPXZR840Qc4c';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('cats');
    }

    videoSearch(term) {
        YoutubeSearch({ key: YOUTUBE_API_KEY, term: term }, (videos) => {
            // ES6 magic! Same as: this.setState({ videos:videos })
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        // Throttles the search. Can only be called once every 300 ms
        const debouncedVideoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <div>hello.</div>
                <SearchBar onSearchTermChange={debouncedVideoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}


ReactDOM.render(<App/>, document.querySelector('.container'));