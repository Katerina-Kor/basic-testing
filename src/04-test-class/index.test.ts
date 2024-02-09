import { InsufficientFundsError, SynchronizationFailedError, getBankAccount } from '.';

describe('BankAccount', () => {
  test('should create account with initial balance', () => {
    const bankAccount = getBankAccount(100);
    expect(bankAccount.getBalance()).toStrictEqual(100);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    const bankAccount = getBankAccount(10);
    expect(() => bankAccount.withdraw(100)).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    const fromBankAccount = getBankAccount(10);
    const toBankAccount = getBankAccount(10);
    expect(() => fromBankAccount.transfer(100, toBankAccount)).toThrowError();
  });

  test('should throw error when transferring to the same account', () => {
    const fromBankAccount = getBankAccount(100);
    expect(() => fromBankAccount.transfer(10, fromBankAccount)).toThrowError();
  });

  test('should deposit money', () => {
    const bankAccount = getBankAccount(10);
    expect(bankAccount.deposit(10).getBalance()).toStrictEqual(20);
  });

  test('should withdraw money', () => {
    const bankAccount = getBankAccount(20);
    expect(bankAccount.withdraw(10).getBalance()).toStrictEqual(10);
  });

  test('should transfer money', () => {
    const fromBankAccount = getBankAccount(100);
    const toBankAccount = getBankAccount(10);
    fromBankAccount.transfer(50, toBankAccount)

    expect(toBankAccount.getBalance()).toStrictEqual(60);
    expect(fromBankAccount.getBalance()).toStrictEqual(50);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const bankAccount = getBankAccount(20);
    const balance = await bankAccount.fetchBalance()
    expect(balance === null || typeof balance === 'number').toBeTruthy();
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const bankAccount = getBankAccount(20);
    const newBalance = 40;
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(newBalance);
    await bankAccount.synchronizeBalance();
    expect(bankAccount.getBalance()).toStrictEqual(newBalance);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const bankAccount = getBankAccount(20);
    jest.spyOn(bankAccount, 'fetchBalance').mockResolvedValue(null);
    await expect(bankAccount.synchronizeBalance()).rejects.toThrow(SynchronizationFailedError);
  });
});
