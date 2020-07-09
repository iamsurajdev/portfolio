import React from "react";
import classes from "./BlogsAndPosts.module.css";
import { Icon } from "@iconify/react";
import blogIcon from "@iconify/icons-carbon/blog";
import filePost from "@iconify/icons-bi/file-post";
import BlogImage from "../Assets/images/DecorativeImages/Blog.png";

const BlogsAndPosts = () => {
  return (
    <div className={classes.main}>
      <div className={classes.component}>
        <h1>Blogs and Posts</h1>
        <div className={classes.sideNoteDiv}>
          <p>
            <span>
              <a
                style={{ textDecoration: "none", fontWeight: "bold" }}
                href="https://dedlok.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dedlok
              </a>
            </span>{" "}
            is a collaboration between me and another amazingly passionate
            programmer. We have a similar interest to help people with the
            knowledge we have. With this interest we start{" "}
            <span>
              <a
                style={{ textDecoration: "none", fontWeight: "bold" }}
                href="https://dedlok.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dedlok
              </a>
            </span>{" "}
            and I am super proud of it. I am not the only creator of all this
            blogs and posts.
          </p>
        </div>
        <div className={classes.subHeading}>
          <strong>You can see all blogs and posts on this below links</strong>
        </div>
        <div className={classes.linksDiv}>
          <div className={classes.link}>
            <a
              href="https://dedlok.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={blogIcon} />
            </a>
            <p>Blogs</p>
          </div>
          <div className={classes.link}>
            <a
              href="https://www.facebook.com/dedlokofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon={filePost} />
            </a>
            <p>Posts</p>
          </div>
        </div>
      </div>
      <div className={classes.imgDiv}>
        <img src={BlogImage} alt="blog" />
      </div>
    </div>
  );
};

export default BlogsAndPosts;
