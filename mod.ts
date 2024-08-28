import * as path from "node:path";
import * as fs from "node:fs";
/*
 * find Directory when you call this function
 */
export const findCurrentDirectory = () => {
  const err = new Error();
  const stack = err.stack?.split("\n") || [];

  // 呼び出し元のスタックトレースを解析して、呼び出し元ファイルのパスを取得
  const callerLine = stack[2]; // スタックの3行目に呼び出し元の情報がある
  const match = callerLine.match(/\((.*):\d+:\d+\)$/);

  if (match) {
    const fullPath = match[1]; // ファイルのフルパス
    const callerDir = path.dirname(fullPath); // ディレクトリ名を取得
    const lastPathSegment = callerDir.split("/").pop(); // 最後のパス部分だけを取得
    return lastPathSegment;
  } else {
    console.log("Could not determine the calling directory.");
  }
};
