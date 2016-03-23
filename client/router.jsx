FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, 
      {
        content: <BlogHome />
      }
    );
  }
});

FlowRouter.route('/:postId', {
  action() {
    ReactLayout.render(MainLayout,
      {
        content: <BlogPost />
      }
    );
  }
});
