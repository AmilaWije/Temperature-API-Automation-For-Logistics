const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZWEzNDYzLWY5ZmQtNGM2Ny05YjdlLWM5YWE2M2ZhNjQxMSIsInVzZXJJZCI6IkxLLVRFU1QtMTIzNCIsImluZGl2aWR1YWxJZCI6IjUwMjRkMmRiLTgxNTAtNGNiZC1hY2NjLWQ4YmY0ZWYyYjk3NCIsIm9yZ1VzZXJJZCI6IjI1MzdmNWQ3LTc1NGQtNGJkMi04YjFjLWQ4MzAyNmRmZDU2YiIsImZpcnN0TmFtZSI6IkFqYW50aGEiLCJsYXN0TmFtZSI6IkJhbmRhcmEiLCJyb2xlcyI6W10sIm9yZ0lkIjoiNzE3MWJiNDEtMTg1YS00NDhmLWFhNDAtYzlhYjY0YWI5Y2EyIiwiZW1haWwiOiJrdXNhbDUwNUBnbWFpbC5jb20iLCJzY29wZXMiOlsibm90aWZpY2F0aW9uOnJvdXRlX2RldmlhdGlvbiIsInZpZXc6cmF0ZS1zaGVldCIsImNyZWF0ZTpqcG0iLCJlZGl0OnZlaGljbGUiLCJ1cGRhdGU6dmVoaWNsZS10aWVyIiwibm90aWZpY2F0aW9uOnVucGxhbm5lZC1zdG9wIiwic2VuZDpxdW90YXRpb24iLCJpbnZpdGU6anBtIiwidXBkYXRlOnNjaGVkdWxlIiwiY3JlYXRlOmhyIiwiYXBwcm92ZTppbnZvaWNlIiwidmlldzpsaXZlLW1hcCIsInZpZXc6Y29udHJhY3QiLCJyZWplY3Q6ZnVlbC1yZXF1ZXN0IiwidXBkYXRlOmNvbnRyb2wtdG93ZXIiLCJ2aWV3OmpvYi1tYXN0ZXIiLCJjb21wbGV0ZTp3b3JrLW9yZGVyIiwiZWRpdDpociIsImNyZWF0ZTp2ZWhpY2xlLXRpZXIiLCJ1cGRhdGU6b3JnIiwidGVybWluYXRlOmpvYi1maWxlIiwidmlldzpociIsInZpZXctam9icy1vd25lZDphZ2dyZWdhdGVkLWpwbSIsImNyZWF0ZTpqb2ItZmlsZSIsImFwcHJvdmU6ZnVlbC1yZXF1ZXN0IiwidmlldzpsaXZlLW1hcC1zaGFyZSIsImNvbXBsZXRlOmZ1ZWwtcmVxdWVzdCIsImVkaXQ6b3JnIiwiY3JlYXRlOnJhdGUtc2hlZXQiLCJhcHByb3ZlOmpvYi1maWxlIiwic2VuZDpqcG0taW52aXRhdGlvbiIsInZpZXc6am9iZmlsZSIsInJlY2VpdmU6anBtLWludml0YXRpb24iLCJjcmVhdGU6b3JnIiwiYWN0aXZhdGU6b3JnIiwidmlldy12ZWhpY2xlLWpvYjphZ2dyZWF0ZWQtanBtIiwidXBkYXRlOnF1b3RhdGlvbiIsImdlbmVyYXRlOmludm9pY2UiLCJkb3dubG9hZDpqb2ItbWFzdGVyLWRvY3VtZW50cyIsInVwZGF0ZTpydW50aW1lLWNvc3RzIiwiY3JlYXRlOmZ1ZWwtcmVxdWVzdCIsImNyZWF0ZTpsb2NhdGlvbiIsImZpbGw6d2l6YXJkIiwidmlldzpsb2NhdGlvbiIsInZpZXc6dmVoaWNsZSIsInVwZGF0ZTpmdWVsLXJlcXVlc3QiLCJpbnZpdGU6d2l6YXJkIiwidmlldzpncHMtZGV2aWNlLW1ndCIsImNyZWF0ZTpxdW90YXRpb24iLCJlZGl0Omdwcy1kZXZpY2UtbWd0Iiwidmlldzp2ZWhpY2xlLXRpZXIiLCJkb3dubG9hZDpjb250cmFjdCIsImFwcHJvdmU6c2NoZWR1bGUiLCJ1cGRhdGU6am9iLWZpbGUiLCJ2aWV3LWFsbDphZ2dyZWdhdGVkLWpwbSIsInZpZXc6b3JnIiwidXBsb2FkOmZpbGUiLCJlZGl0OmxvY2F0aW9uIiwidmlldzpyYXRlLXRpZXIiLCJpbnZpdGU6am9iLWZpbGUiLCJjcmVhdGU6dmVoaWNsZSIsInVwZGF0ZTpyYXRlLXNoZWV0IiwiZG93bmxvYWQ6ZmlsZSIsImRlbGV0ZTp2ZWhpY2xlLXRpZXIiLCJkZWxldGU6cmF0ZS1zaGVldCIsImFwcHJvdmU6cXVvdGF0aW9uIiwiZG93bmxvYWQ6cXVvdGF0aW9uIiwidmlldzpqb2ItZmlsZSIsInZpZXc6anBtIiwidmlldzpxdW90YXRpb24iLCJlZGl0OmxpdmUtbWFwLXNoYXJlIiwiYWNjZXB0OnF1b3RhdGlvbiJdLCJ0ZW5hbnQiOiJKS0wiLCJvcGVyYXRpb25zIjpbIjAwNWZmOTA1LWRmMDEtNDA3Ny1hZWJhLTJjYzA1NzQzY2RjNCIsIjczOWNhMmRkLWNjODktNDViMS05ZjIzLWNhMzJhOWVmNzQyZCIsIjdkZTFhYjI2LWM3YWQtNGMwNS05YjkwLTk3YjE5OWUzNjY4MiIsIjQ2MDRkZjg4LTc5NjMtNDAwNi04NDlkLTkzYzliODVmNGRlOCIsIjRjMjVjYjQ2LWNjMmYtNGE5MC1hOGIwLTYxODdiN2EwNTVhZSIsImNmZDcwZTY0LTAwOTQtNDY4NS05Mjc4LWM5YmUyN2YyMjNiYyIsIjMzMDg1NmRkLThiYmYtNDhlNy05MWJhLTZjYmVjN2ViZGZjMCIsImQwZDQ1NDU1LTJmM2YtNGUxYS04OTQ1LTFlNGVlM2U3Yzk1ZCIsImEzOGJmNDE0LTUxNDItNGE0Yi05NzIyLWYwYWY4OTU4NjVhZSIsIjYxOGJkY2Q1LTY0ZjktNGZkNS04YjQ2LWU2OTU5OTY5M2FkYiIsImU0YmUyYWIxLWM1YjktNDQwYi05Yzk3LWQwYmViMDYzNTY3NyJdLCJpYXQiOjE3MjA5ODE1OTAsImV4cCI6MTcyMTA2Nzk5MH0.JbQqyjQOltHqbXTW84VnkX_GUJHDncN6CjOC2-uAKy4"
    },
  },
});