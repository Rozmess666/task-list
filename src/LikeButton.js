import React, {useState} from "react";

// class LikeButton extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { isLiked: false}
//     }
//     render() {
//         if (this.state.isLiked) {
//             return 'Вам это понравилось.';
//         }
//         return <button
//             style={ {border: '1px solid #000', background: '#ffff'}}
//             onClick= { () => this.setState( {isLiked: true})}
//         >Мне нравится</button>
//
//     }
// }

export default function LikeButton() {

    const [isLiked, setIsLiked] = useState(false);

    if (isLiked) {
        return 'Вам это понравилось.';
    }
    return <button
        style={ {border: '1px solid #000', background: '#ffff'}}
        onClick= { () => setIsLiked( !isLiked)}
    >Мне нравится</button>
}