import Iframe from 'react'

const FacebookReviews = () => {

    return (

    <Iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fbrandon.lunderstedt%2Fposts%2Fpfbid0GC41Tk4Lx7AvM2xFQZk9ewDU5JiRYaDuBEaHwGrmxTaDSi1JBoAZi1e7DaRdZqwPl&show_text=true&width=500" 
        width="500" 
        height="185" 
        style= {{
            border: 'none', overflow: 'hidden'
        }}
        scrolling="no" 
        frameborder="0" 
        allowfullscreen="true" 
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
    );
};

export default FacebookReviews;