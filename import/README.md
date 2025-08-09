# Importing data into Sanity

Files in this folder are newline-delimited JSON (.ndjson). Import with the Sanity CLI from the repo root:

```
sanity dataset import ./static/import/projects.ndjson <dataset> --replace
sanity dataset import ./static/import/resumeEntries.ndjson <dataset> --replace
sanity dataset import ./static/import/skillSections.ndjson <dataset> --replace
sanity dataset import ./static/import/contact.ndjson <dataset> --replace
```

Notes:
- Use `--replace` to re-run imports during iteration.
- Dates are ISO8601 (YYYY-MM-DD). Open-ended ranges use `9999-12-31`.
- References use predictable `_id`s like `project.<slug>`, `resume.<category>.<slug>`.
- To import files/images inline in ndjson, you can use the CLI `_sanityAsset` shortcut, e.g.:

```
{
  "_type": "image",
  "_sanityAsset": "image@https://example.com/image.png"
}
```

For large imports with assets, prefer a tarball bundle as per docs.
