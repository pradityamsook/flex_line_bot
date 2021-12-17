node.warn(msg);
const dataFlex = JSON.parse(msg.data);
node.warn(dataFlex);
const loanCollection =
  dataFlex.data > 0 &&
  dataFlex.data.map((item) => {
    node.warn(card);
    return {
      display_name: item.promotion_name,
      Image: item.promotion_banner,
      Btn: "รายละเอียด",
      URL: item.promotion_page,
      Promotion: item.details,
    };
  });
msg.prompt_plus_promotion_flextemplate = loanCollection;
return msg;
