exports.get404= (req, res, next) => {
    //res.sendFile(path.join(__dirname, './', 'views', '404.html'));
    res.status(404).render("404", { pageTitle: "Page is Not Found", path: '/404'});
  }