# e3mail website

The GitHub Pages site for [e3mail](https://github.com/Yjlion/e3mail), an
end-to-end encrypted email client.

A single static page: `index.html`, `assets/css/style.css`, `assets/js/site.js`,
and screenshots in `assets/img/` copied from the e3mail repository's
`screenshots/` directory. Colours follow the app's `Theme.qml`, light and dark.

It deploys through `.github/workflows/jekyll-gh-pages.yml` on every push to
`main`. In the repository's **Settings → Pages**, set **Source** to
**GitHub Actions**.

To preview locally: `python3 -m http.server` and open http://localhost:8000.
