# Escape Changelog Output for use in JSON

<p>
  <a href="https://github.com/actions/javascript-action/actions"><img alt="javscript-action status" src="https://github.com/actions/javascript-action/workflows/units-test/badge.svg"></a>
</p>

This is a super simple javascript based action to escape quotes and new lines within a changelog markdown so it can be utilized within a JSON.

## Usage

You can now consume the action by referencing the v1 branch

```yaml
uses: linchpin/escape-changelog@v1
with:
  changelog_entry: {changelog entry from previous step} // possibly from mindsers/changelog-reader-action
```

See the [actions tab](https://github.com/actions/javascript-action/actions) for runs of this action! :rocket:
