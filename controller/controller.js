const CC = require('crypto-converter-lt');
const buyModel = require("../schema/buyschema.js")
class Controller {
  static Home = async (req, resp) => {
    try {
      let currencyConverter = new CC({
        from: "USDT",
        to: req.body.currency,
        amount: Number(req.body.amount)
      });
      const currencyName = {
        USDT: "TETHER",
        BTC: "BITCOIN",
        BNB: "BINANCE Coin",
        BCH: "BITCOIN CASH",
        ADA: "CARDANO",
        LINK: "CHAINLINK",
        MANA: "DECENTRALAND",
        DOGE: "DOGECOIN",
        ETH: "ETHER",
        ETC: "ETHEREUM CLASSIC",
        LTC: "LITECOIN",
        XRP: "RIPPLE"
      }
      let result = "";
      if (req.body.amount && req.body.currency) {
        const currencyConvert = currencyConverter.convert();
        result = await currencyConvert;
      }
      const data = {
        currency: currencyName,
        chooseCurrency: req.body.currency,
        convertAmount: req.body.amount,
        result: result
      };
      resp.render("index", { data });
    } catch (error) {
      console.log(error)
    }
  };

  static about = (req, resp) => {
    resp.render("about");
  };

  static buy = (req, resp) => {
    const currencyName = {
      USDT: "TETHER",
      BTC: "BITCOIN",
      BNB: "BINANCE Coin",
      BCH: "BITCOIN CASH",
      ADA: "CARDANO",
      LINK: "CHAINLINK",
      MANA: "DECENTRALAND",
      DOGE: "DOGECOIN",
      ETH: "ETHER",
      ETC: "ETHEREUM CLASSIC",
      LTC: "LITECOIN",
      XRP: "RIPPLE"
    }
    const data = {
      currency: currencyName,
    }
    resp.render("buy", { data });
  };

  static buy_take_order = async (req, resp) => {
    try {
      const { name, accountTitle, accountNumber, amount, currency, paymentMethod } = req.body;
      // Create a new transaction object
      const newTransaction = new buyModel({
        name: name,
        accountTitle: accountTitle,
        accountNumber: accountNumber,
        amount: amount,
        currency: currency,
        paymentMethod: paymentMethod,
      });
      // Save the transaction to the database
      const savedTransaction = await newTransaction.save();
    } catch (error) {
      console.error('Error creating transaction:', error);
    }
    resp.redirect("/order");
  }

  static privacy = (req, resp) => {
    resp.render("privacy-policy");
  };

  static terms = (req, resp) => {
    resp.render("terms");
  };
}

module.exports = Controller;
