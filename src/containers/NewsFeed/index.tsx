
import * as React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import Container from '../../components/Container'
import Post from '../../components/Post'
import * as postsDuck from '../../ducks/Posts'

interface INewsFeedProps {
    fetchPosts: () => void
    like: (a: string) => void// vamos a necesitar la referencia del post al que le damos like
    share: (a: string) => void// vamos a necesitar la referencia del post al que le damos share
    fetched: boolean
    loading: boolean
    data: postsDuck.IDataPosts
}
class NewsFeed extends React.Component<INewsFeedProps>{
    constructor(props: INewsFeedProps) {
        super(props)
        const { fetchPosts, fetched } = props
        if (fetched) {
            return
        }
        fetchPosts()
    }
    // handleLike recibe un id y retorna una funcion. Esto nos permite 
    public render() {
        const { data } = this.props
        // // tslint:disable-next-line: no-console
        console.log(this.props)
        return (
            <Container>
                {/* <div style = {{ margin: '0 auto' }}>
                    <Post image='https://placekitten.com/300/200'/>
                    </div>
                <div style = {{ margin: '0 auto' }}>
                    <Post image='https://placekitten.com/300/200'/>
                </div>   */}
                {Object.keys(data).map(x => {
                    const post = data[x]
                    return <div key={x} style={{ margin: '0 auto', marginTop:'10px' }}>
                        <Post
                            share={this.handleShare(x)}
                            like={this.handleLike(x)}
                            image={post.imageURL}
                        />
                    </div>
                })}
            </Container>
        )
    }
    private handleLike = (id: string) => () => {
        const { like } = this.props
        like(id)
    }
    private handleShare = (id: string) => () => {
        const { share } = this.props
        share(id)
    }
}

// agregado en clase 76
const mapStateToProps = (state: any) => {
    const { Posts: { data, fetched, fetching } } = state
    const loading = fetching || !fetched
    return {
        data,
        fetched,
        loading,
    }
}


const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => bindActionCreators(postsDuck, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed)




// import * as React from 'react';
// import Post from '../../components/Post'
// import Container from '../../components/Container';class NewsFeed extends React.Component {
//   public render() {
//     return (
//       <Container>
//         <div style={{
//           margin:'0 auto'
//         }}>
//           <Post image={"http://placeimg.com/200/200/nature"} />
//           <Post image={"http://placeimg.com/200/200/nature"} />
//       </div>
//       </Container>
//     );
//   }
// }
