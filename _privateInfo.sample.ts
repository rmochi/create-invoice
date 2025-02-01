// 請求内容
export const billingItems: BillingItem[] = [
	{
		name: "プロジェクトA",
		quantity: 100,
		unitPrice: 1000,
	},
	{
		name: "プロジェクトB",
		quantity: 10,
		unitPrice: 100000,
	},
];

// 請求先会社情報
export const billingCompany: BillingCompany = {
	name: "株式会社さんぷる",
	address: "東京都千代田区さんぷる町1-2-3",
};

// 振込先銀行情報
export const billingSourceBank: BillingSourceBank = {
	bankName: "まるまる銀行",
	branchName: "ばつばつ支店",
	accountNumber: "9999999",
	accountHolder: "サンプルタロウ",
};

// 請求元情報
export const billingSource: BillingSource = {
	name: "サンプル太郎",
	address: ["〒xxx-xxxx", "東京都千代田区永田町１丁目１０−１"],
	phoneNumber: "xxx-xxxx-xxxx",
};

// Types

/**
 * @description 請求内容
 * @property {string} name - 請求内容
 * @property {number} quantity - 作業時間
 * @property {number} unitPrice - 単価（円）
 */
type BillingItem = {
	/**
	 * 請求内容
	 */
	name: string;
	/**
	 * 作業時間
	 */
	quantity: number;
	/**
	 * 単価（円）
	 */
	unitPrice: number;
};

/**
 * @description 請求先会社情報
 * @property {string} name - 会社名
 * @property {string} address - 会社住所
 */
type BillingCompany = {
	/**
	 * 会社名
	 */
	name: string;
	/**
	 * 会社住所
	 */
	address: string;
};

/**
 * @description 振込先銀行情報
 * @property {string} bankName - 銀行名
 * @property {string} branchName - 支店名
 * @property {string} accountNumber - 口座番号
 * @property {string} accountHolder - 口座名義
 */
type BillingSourceBank = {
	/**
	 * 銀行名
	 */
	bankName: string;
	/**
	 * 支店名
	 */
	branchName: string;
	/**
	 * 口座番号
	 */
	accountNumber: string;
	/**
	 * 口座名義
	 */
	accountHolder: string;
};

/**
 * @description 請求元情報
 * @property {string} name - 氏名
 * @property {string | string[]} address - 住所
 * @property {string} phoneNumber - 電話番号
 * @property {string} email - メールアドレス
 */
type BillingSource = {
	/**
	 * 氏名 or 会社名
	 */
	name: string;
	/**
	 * 住所
	 */
	address: string | string[];
	/**
	 * 電話番号
	 */
	phoneNumber?: string;
	/**
	 * メールアドレス
	 */
	email?: string;
};
