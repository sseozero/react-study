import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name:"홍길동",
        comment : "안녕하세요. 홍길동입니다",
    },
    {
        name:"호랑이",
        comment : "어흥어흥",
    },
    {
        name:"얼룩말",
        comment : "탈출하자~",
    },
]

function CommentList(props){
    return(
        <div>
        {comments.map((comment)=>{
            return(
                <Comment name={comment.name} comment={comment.comment}/>
            );
        })}    
        </div>
    );
}

export default CommentList;
