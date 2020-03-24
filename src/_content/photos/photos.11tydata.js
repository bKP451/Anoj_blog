module.exports = {
  layout: 'photo',
  permalink: 'photos/{{ page.fileSlug }}.html',
  tags: ['post', 'photo'],
  vocab: 'entry',
  changefreq: 'monthly',
  priority: 0.8,
  eleventyComputed: {
    title: 'Photo{% if photo.size > 1 -%}s{% endif %}: {{ date | date: dates.datetime_full }}',
    excludeTitleFromFeed: true,
    image: '{{ photo[0].url }}',
    target: '{{ page.url | prepend: app.url | pretty }}'
  }
};
