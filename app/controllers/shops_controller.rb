class ShopsController < ApplicationController

  def index
    @shops = Shop.all
  end

  def new
    @shop = Shop.new
  end

  def create
    @shop = Shop.create(shop_params)
  end

  private

  def shop_params
    params.require(:shop).permit(
      :shop_name,
      :shop_name_f,
      :phone_number,
      :city_address,
      :building,
      :hours,
      :closed_day,
      :prtext,
      :prefecture_ids,
      :genre_ids,
      :pic1,
      :pic2,
      :pic3,
      :pic4,
      :pic5)
  end

  def show
  end

end
