---
title: MergeCells
permalink: /next/api/merge-cells
canonicalUrl: /api/merge-cells
editLink: false
---

# MergeCells

[[toc]]

## Description

Plugin, which allows merging cells in the table (using the initial configuration, API or context menu).

**Example**  
```js
const hot = new Handsontable(document.getElementById('example'), {
 data: getData(),
 mergeCells: [
   {row: 0, col: 3, rowspan: 3, colspan: 3},
   {row: 2, col: 6, rowspan: 2, colspan: 2},
   {row: 4, col: 8, rowspan: 3, colspan: 3}
 ],
```

## Options

### mergeCells
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/dataMap/metaManager/metaSchema.js#L1978

:::

_mergeCells.mergeCells : boolean | Array&lt;object&gt;_

If set to `true`, it enables a possibility to merge cells. If set to an array of objects, it merges the cells provided
in the objects (see the example below). More information on [the demo page](https://docs.handsontable.com/demo-merge-cells.html).

**Default**: <code>false</code>  
**Example**  
```js
// enables the mergeCells plugin
margeCells: true,

// declares a list of merged sections
mergeCells: [
  // rowspan and colspan properties declare the width and height of a merged section in cells
  {row: 1, col: 1, rowspan: 3, colspan: 3},
  {row: 3, col: 4, rowspan: 2, colspan: 2},
  {row: 5, col: 6, rowspan: 3, colspan: 3}
],
```

## Methods

### clearCollections
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L284

:::

_mergeCells.clearCollections()_

Clears the merged cells from the merged cell container.



### disablePlugin
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L139

:::

_mergeCells.disablePlugin()_

Disables the plugin functionality for this Handsontable instance.



### enablePlugin
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L97

:::

_mergeCells.enablePlugin()_

Enables the plugin functionality for this Handsontable instance.



### isEnabled
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L90

:::

_mergeCells.isEnabled() ⇒ boolean_

Checks if the plugin is enabled in the handsontable settings. This method is executed in [Hooks#beforeInit](./Hooks/#beforeInit)
hook and if it returns `true` than the [enablePlugin](#MergeCells+enablePlugin) method is called.



### merge
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L489

:::

_mergeCells.merge(startRow, startColumn, endRow, endColumn)_

Merges the specified range.

**Emits**: [`Hooks#event:beforeMergeCells`](./hooks/#beforeMergeCells), [`Hooks#event:afterMergeCells`](./hooks/#afterMergeCells)  

| Param | Type | Description |
| --- | --- | --- |
| startRow | `number` | Start row of the merged cell. |
| startColumn | `number` | Start column of the merged cell. |
| endRow | `number` | End row of the merged cell. |
| endColumn | `number` | End column of the merged cell. |



### mergeSelection
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L325

:::

_mergeCells.mergeSelection([cellRange])_

Merges the selection provided as a cell range.


| Param | Type | Description |
| --- | --- | --- |
| [cellRange] | `CellRange` | `optional` Selection cell range. |



### unmerge
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L506

:::

_mergeCells.unmerge(startRow, startColumn, endRow, endColumn)_

Unmerges the merged cell in the provided range.

**Emits**: [`Hooks#event:beforeUnmergeCells`](./hooks/#beforeUnmergeCells), [`Hooks#event:afterUnmergeCells`](./hooks/#afterUnmergeCells)  

| Param | Type | Description |
| --- | --- | --- |
| startRow | `number` | Start row of the merged cell. |
| startColumn | `number` | Start column of the merged cell. |
| endRow | `number` | End row of the merged cell. |
| endColumn | `number` | End column of the merged cell. |



### unmergeSelection
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L344

:::

_mergeCells.unmergeSelection([cellRange])_

Unmerges the selection provided as a cell range.


| Param | Type | Description |
| --- | --- | --- |
| [cellRange] | `CellRange` | `optional` Selection cell range. |



### updatePlugin
  
::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/mergeCells/mergeCells.js#L148

:::

_mergeCells.updatePlugin()_

Updates the plugin state. This method is executed when [Core#updateSettings](./Core/#updateSettings) is invoked.

