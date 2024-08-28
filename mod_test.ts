import { assertEquals } from "jsr:@std/assert";
import { findCurrentDirectory } from "./mod.ts";

Deno.test(function addTest() {
  assertEquals(findCurrentDirectory(), "findCurrentDirectory");
});
