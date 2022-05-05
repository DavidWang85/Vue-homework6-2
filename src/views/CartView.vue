<template>
  <div class="container">
    <h2>購物車</h2>
    <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product + '123'">
          <td style="width: 200px">
            <div
              :style="{ backgroundImage: `url(${product.imageUrl})` }"
              style="
                height: 100px;
                background-size: cover;
                background-position: center;
              "
            ></div>
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            <div v-if="product.origin_price === product.price" class="h5">
              {{ product.price }} 元
            </div>
            <div v-else>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
            </div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button
                :disabled="isLoadingItem === product.id"
                @click="openProductModal(product.id)"
                type="button"
                class="btn btn-outline-secondary"
              >
                查看更多
              </button>
              <button
                :disabled="isLoadingItem === product.id"
                @click="addToCart(product.id)"
                type="button"
                class="btn btn-outline-danger"
              >
                <div
                  v-show="isLoadingItem === product.id"
                  class="spinner-border spinner-border-sm"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import emitter from "@/libs/emitter";

export default {
  data() {
    return {
      cartData: {},
      products: [],
      isLoadingItem: " ",
    };
  },
  methods: {
    getProducts() {
      this.$http
        .get(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
        )
        .then((res) => {
          this.products = res.data.products;
        });
    },
    addToCart(id, qty = 1) {
      const data = {
        product_id: id,
        qty,
      };
      this.isLoadingItem = id;
      this.$http
        .post(
          `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`,
          { data }
        )
        .then((res) => {
          // this.alertAddToCart(res.data.data.product.title);
          console.log("購物車", res);
          // this.getCart();
          // this.$refs.productModal.closeModal();
          this.isLoadingItem = "";
          emitter.emit("get-cart");
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
