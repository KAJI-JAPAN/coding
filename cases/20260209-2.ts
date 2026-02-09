/*
* 【問題設定】
*     管理対象の「リソースIDリスト（Master IDs）」と、実際に処理が行われた「実行ログ（Processing Logs）」があります。
*     マスターには存在するが、ログには一度も記録されていない（未処理の）リソースIDをすべて抽出してください。
*
* 【要件】
*     計算量: リソース数が膨大（数万件〜）になっても低負荷で動くよう、$O(N + M)$ で実装してください。
*     ヒント: Array.includes() をループ内で使うと $O(N \times M)$ になってしまいます。
*     型定義: * ログ1件の構造は interface で定義。ID自体の型（文字列）などは type で定義。
* */

// --- 型定義 ---
type ResourceId = string;

interface ProcessingLog {
	logId: string;
	resourceId: ResourceId; // どのリソースを処理したか
	timestamp: number;
}

/**
 * 未処理のリソースIDを抽出する
 * @param masterIds - 管理対象の全ID
 * @param logs - 実行済みのログ一覧
 */
const getUnprocessedIds = (masterIds: ResourceId[], logs: ProcessingLog[]): ResourceId[] => {
	// 1. ログから「処理済みID」を高速検索できる形（Set）に変換
	// ???

	// 2. マスターIDをループし、Setに含まれていないものだけを残す
	// ???
};

// --- テストデータ ---
const masterIds: ResourceId[] = ["RES_001", "RES_002", "RES_003", "RES_004", "RES_005"];

const logs: ProcessingLog[] = [
	{ logId: "L1", resourceId: "RES_001", timestamp: 1625059200 },
	{ logId: "L2", resourceId: "RES_003", timestamp: 1625062800 },
	{ logId: "L3", resourceId: "RES_001", timestamp: 1625066400 }, // 重複あり
];

// 期待される結果: ["RES_002", "RES_004", "RES_005"]
console.log(getUnprocessedIds(masterIds, logs));