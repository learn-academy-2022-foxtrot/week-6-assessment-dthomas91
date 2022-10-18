# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This will create the area in your rails application where you will create controller methods
class BlogPostsController < ApplicationController
  def index
    # ---2) Accesses all of the items that are in the database
    @posts = BlogPost.all
  end

  # ---3) This searches one item in the database. It accesses the item by its id
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) This will allow you to add new information into the database
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Submits user data to the database. This is specifically looking to see if the information that is trying to be created is valid, by comparing it to the blog_post_params requirment which is found in the strong params
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This will allow you to edit the post of a specific id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This will modify the existing item in a database of one item.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This redirects back to the main page after the item has been destroyed
      redirect_to blog_posts_path
    end
  end

  # ---9) This restricts the scope of where the method below it can be called. 
  private
  def blog_post_params
    # ---10) This is the requirment for every time the method of params is called, it requires blog_post and will allow title and content. 
    params.require(:blog_post).permit(:title, :content)
  end
end
