
function MobilePhone(brand, color, primaryCamera, mdate, platform){
    this.brand = brand;
    this.color = color;
    this.primaryCamera = primaryCamera;
    this.manufactureDate = mdate;
    this.platform = platform;
}

MobilePhone.prototype.reviewRating = function(){
    return this.mobileRating(this.brand, this.platform);
};

MobilePhone.prototype.mobileRating = function(brand, platform){
    var reviewRating = "****";
    // logic shall be implemented later by collecting data/reviews from third part system
    return reviewRating;
};

MobilePhone.prototype.finalPrice = function(callback){
    var _this = this;
    this.mobilePrice(function(finalPrice){
        _this.finalPrice = finalPrice;
        callback.call(_this, _this.finalPrice);
    });
};

MobilePhone.prototype.mobilePrice = function(callback){
    // let's use hard-coded values for demonstration purpose,
    // In JavaScript, there is rounding errors.
    // So always calculate in cents not dollars.
    var price = (50.0 * 100);
    var tax = price * 6;
    price = (price + tax) / 100;
    callback.call(this, price);
};