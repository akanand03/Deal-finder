import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core/";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";
import Confetti from "react-confetti"; // Import Confetti component
import { likePost, deletePost } from "../../../actions/posts";
import useStyles from "./styles";
import jwtDecode from "jwt-decode";

const Post = ({ post, setCurrentId }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [likes, setLikes] = useState(post?.likes);
  const [couponCode, setCouponCode] = useState("");
  const [openCoupon, setOpenCoupon] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false); // State for showing confetti
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  let decodedToken;
  if (user?.token) {
    decodedToken = jwtDecode(user?.token);
  }
  let userId;
  const googleId = decodedToken?.sub;
  if (googleId) {
    userId = googleId;
  } else {
    userId = user?.result?._id;
  }
  const hasLikedPost = post?.likes?.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openPost = () => {
    history.push(`/posts/${post._id}`);
  };

  const generateCoupon = () => {
    // Generate a random funky coupon code
    const adjectives = [
      "Funky",
      "Groovy",
      "Radical",
      "Awesome",
      "Fantastic",
      "Cool",
      "Amazing",
      "Epic",
    ];
    const nouns = [
      "Deal",
      "Discount",
      "Savings",
      "Offer",
      "Coupon",
      "Bargain",
      "Promotion",
      "Special",
    ];
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 100);
    const randomCoupon =
      `${randomAdjective}${randomNoun}${randomNumber}`.toUpperCase();
    setCouponCode(randomCoupon);
    setOpenCoupon(true);
  };

  const copyCoupon = () => {
    // Copy the coupon code to the clipboard
    navigator.clipboard.writeText(couponCode)
      .then(() => {
        // Coupon code copied successfully, trigger confetti animation
        setShowConfetti(true); // Show confetti animation
        setTimeout(() => {
          setShowConfetti(false); // Hide confetti animation after a longer delay
        }, 5000); // Duration of the confetti animation
        // You can add any additional logic here
        setOpenCoupon(false); // Close the coupon dialog if needed
        alert("Coupon code copied to clipboard!");
      })
      .catch((error) => {
        console.error('Failed to copy coupon code:', error);
        alert("Failed to copy coupon code. Please try again.");
      });
  };

  const handleCouponClose = () => {
    setOpenCoupon(false);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openPost}
      >
        <CardMedia
          className={classes.media}
          image={
            post.selectedFile ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          title={post.title}
        />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        {(googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(post._id);
              }}
              style={{ color: "white" }}
              size="small"
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
        )}
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <Typography
          className={classes.title}
          gutterBottom
          variant="h5"
          component="h2"
        >
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.message.split(" ").splice(0, 3).join(" ")}...
          </Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />
        </Button>
        {(googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="secondary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
        <Button
          size="small"
          color="primary"
          onClick={generateCoupon}
        >
          Get Deal
        </Button>
      </CardActions>
      <Dialog
        open={openCoupon}
        onClose={handleCouponClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Coupon</DialogTitle>
        <DialogContent>
          <Typography variant="h5" gutterBottom>
            {couponCode}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={copyCoupon} color="primary">
            Copy Coupon
          </Button>
          <Button onClick={handleCouponClose} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}
    </Card>
  );
};

export default Post;
