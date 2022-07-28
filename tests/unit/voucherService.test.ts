import { createVoucher } from "../../src/services/voucherService.js";
import { jest } from "@jest/globals";
import voucherRepository from "../../src/repositories/voucherRepository.js";
 
 
 describe("voucherService test suite", () => {
  it("should create a voucher", async () => {

    const code: string =  "dasd7as7d8as89d7a";
    const discount: number = 50;

    jest.spyOn(voucherRepository, "getVoucherByCode").mockResolvedValue(null);

    const voucherRepositoryCreate = jest.spyOn(voucherRepository, "createVoucher").mockResolvedValue(null);

    await createVoucher(code, discount);
    expect(voucherRepositoryCreate).toBeCalled();

  })
  it.todo("voucher must be unique")
  it.todo("voucher must be used only once")
  it.todo("Minimum purchase of 100 to activate the voucher")
  it.todo("When using a voucher discount, the code and the total purchase amount must be sent")
})