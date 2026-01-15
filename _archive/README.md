# Modernized NickChua.me

This directory contains an updated build of the site that targets Ruby 3.3 and Jekyll 4.3. Use it to verify changes before replacing the live `nickchua` directory.

## Local development

```sh
docker compose -f docker-compose.modern.yml up
```

The server runs on http://localhost:4001 with live reload enabled.

## Ruby environment

- Ruby 3.3.1 (`.ruby-version`) - ✅ Installed
- Bundler 2.x (automatically available in the Docker image)
- Jekyll 4.3.3 plus `jekyll-feed` and `jekyll-seo-tag` plugins

### Note on local installation

If installing dependencies locally with `bundle install`, you may encounter a compilation error with the `eventmachine` gem (required for Jekyll's live reload feature) on newer macOS versions. This is a known issue with eventmachine 1.2.7. 

**Recommended solution:** Use Docker for local development (see above), which has all dependencies pre-compiled and working.

**Alternative:** If you need to install locally, you can try:
- Using `bundle install` in Docker first to generate `Gemfile.lock`, then copying it to your local environment
- Or building the site without live reload: `bundle exec jekyll build` (instead of `serve`)

## Deploying live

Once you have validated the updated site, move or rename this directory to replace the old `nickchua` directory, then deploy as usual.

