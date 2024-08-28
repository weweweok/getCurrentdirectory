# この関数が呼び出されたファイルのディレクトリを表示します。

next.js といった web ページの url と開発環境のディレクトリが一致している時にこの関数を利用しながら、url のエンドポイントごとに依存した処理を書く際にわざわざ変数などに渡したエンドポイントを逐次変える手間を減らします。

in `/your_directory`

```
import { findCurrentDirectory } from "./mod.ts";

console.log(findCurrentDirectory()) // your_directory
```
