import React from "react";
import i1 from "./img01.jpg";


const styles={
    wrapper:{
        margin:8,
        padding:8,
        display:"flex",
        flexDirection:"row",
        border:"1px solid gray",
        borderRadius:16,
    },
    imageContainer:{},
    image:{
        width:50,
        height:50,
        borderRadius:25,
    },
    ContentContainer:{
        marginLeft:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
    },
    nameText:{
        color:"black",
        fontSize:16,
        fontWeight:"bold",
    },
    commentText:{
        color:"black",
        fontSize:16,
    },
};


function Comment(props){
    return(

        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                {/* <img src={require("./img01.jpg")} alt=""  style={styles.image}/> */}
                {<img src={i1} alt=""  style={styles.image}/>}
            </div>
      



        <div style={styles.ContentContainer}>
            <span style={styles.nameText}>{props.name}</span>
            <span style={styles.commentText}> {props.comment}
            </span>
            </div>
        </div>
    );
}

export default Comment;