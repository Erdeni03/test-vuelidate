<template>
  <div id="app" class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>VueJs Vuelidate</h1>

      <div class="form-control">
        <label for="surname">Фамилия*</label>
        <input
            type="text"
            id="surname"
            placeholder="Введите фамилию"
            :class="{invalid: $v.formData.surname.$dirty && !$v.formData.surname.required}"
            v-model.trim="formData.surname"
        />
        <small class="invalid" v-if="$v.formData.surname.$dirty && !$v.formData.surname.required"
        >Поле не должно быть пустым</small
        >
      </div>
      <div class="form-control">
        <label for="name">Имя*</label>
        <input
            type="text"
            id="name"
            placeholder="Введите имя"
            :class="{invalid: $v.formData.name.$dirty && !$v.formData.name.required}"
            v-model.trim="formData.name"
        />
        <small class="invalid" v-if="$v.formData.name.$dirty && !$v.formData.name.required"
        >Поле не должно быть пустым</small
        >
      </div>
      <div class="form-control">
        <label for="patronymic">Отчество</label>
        <input
            type="text"
            id="patronymic"
            placeholder="Введите отчество"
            v-model.trim="formData.patronymic"
        />
      </div>

      <div class="form-control">
        <label for="dateBirthday">Дата рождения*</label>
        <input
            type="date"
            id="dateBirthday"
            v-model="formData.dateBirthday"
            :class="{
            invalid: $v.formData.dateBirthday.$dirty && !$v.formData.dateBirthday.required
          }"
        />
        <small
            class="invalid"
            v-if="$v.formData.dateBirthday.$dirty && !$v.formData.dateBirthday.required"
        >Обязательное поле</small
        >
      </div>
      <div class="form-control">
        <label for="tel">Номер телефона*</label>
        <input
            type="tel"
            id="tel"
            placeholder="791-4567-8901"
            v-model.number="formData.tel"
            :class="{
            invalid:
              ($v.formData.tel.$dirty && !$v.formData.tel.required) ||
              ($v.formData.tel.$dirty && !$v.formData.tel.telRegex)
          }"
        />
        <small class="invalid" v-if="$v.formData.tel.$dirty && !$v.formData.tel.required"
        >Поле не должно быть пустым</small
        >

        <small class="invalid" v-else-if="$v.formData.tel.$dirty && !$v.formData.tel.telRegex"
        >Поле Номер телефона должен начинаться с 7 и содержать 11 цифр</small
        >
      </div>
      <div class="form-control">
        <label for="gender">Пол</label>
        <input type="text" id="gender" v-model="formData.gender"/>
      </div>
      <div class="form-control">
        <label for="client">Группа клиентов*</label>
        <select
            id="client"
            multiple
            size="3"
            v-model.trim="formData.clientGroup"
            :class="{
            invalid: $v.formData.clientGroup.$dirty && !$v.formData.clientGroup.required
          }"
        >
          <option value="VIP">VIP</option>
          <option value="Проблемные">Проблемные</option>
          <option value="ОМС">ОМС</option>
        </select>
        <small
            class="invalid"
            v-if="$v.formData.clientGroup.$dirty && !$v.formData.clientGroup.required"
        >Поле не должно быть пустым</small
        >
      </div>
      <div class="form-control">
        <label for="doctor">Лечащий врач</label>
        <select id="doctor" v-model="formData.doctor">
          <option value="Иванов">Иванов</option>
          <option value="Захаров">Захаров</option>
          <option value="Чернышева">Чернышева</option>
        </select>
      </div>
      <div class="form-checkbox">
        <label for="check">Не отправлять СМС</label>
        <input type="checkbox" id="check" name="check" v-model="formData.sendCheck"/>
      </div>

      <h3>Адрес:</h3>

      <div class="form-control">
        <label for="postcode">Индекс</label>
        <input type="text" id="postcode" name="postcode" v-model="formData.postcode"/>
      </div>

      <div class="form-control">
        <label for="country">Страна</label>
        <input type="text" id="country" name="country" v-model="formData.country"/>
      </div>

      <div class="form-control">
        <label for="region">Область</label>
        <input type="text" id="region" name="region" v-model="formData.region"/>
      </div>

      <div class="form-control">
        <label for="city">Город*</label>
        <input
            type="text"
            id="city"
            name="city"
            v-model.trim="formData.city"
            :class="{
            invalid: $v.formData.city.$dirty && !$v.formData.city.required
          }"
        />
        <small class="invalid" v-if="$v.formData.city.$dirty && !$v.formData.city.required"
        >Поле не должно быть пустым</small
        >
      </div>

      <div class="form-control">
        <label for="street">Улица</label>
        <input type="text" id="street" name="street" v-model="formData.street"/>
      </div>
      <div class="form-control">
        <label for="house">Дом</label>
        <input type="text" id="house" name="house" v-model="formData.house"/>
      </div>

      <h3>Паспорт:</h3>
      <div class="form-control">
        <label for="document">Тип документа*</label>
        <select

            id="document"
            v-model.trim="formData.documentType"
            :class="{
            invalid: $v.formData.documentType.$dirty && !$v.formData.documentType.required
          }"
        >
          <option value="Паспорт">Паспорт</option>
          <option value="Свидетельство о рождении"
          >Свидетельство о рождении
          </option
          >
          <option value="Вод. удостоверение">Вод. удостоверение</option>
        </select>
        <small
            class="invalid"
            v-if="$v.formData.documentType.$dirty && !$v.formData.documentType.required"
        >Обязательное поле</small
        >
      </div>

      <div class="form-control">
        <label for="passport_series">Серия</label>
        <input
            type="text"
            id="passport_series"
            name="passport_series"
            v-model="formData.passportSeries"
        />
      </div>

      <div class="form-control">
        <label for="passport_region">Область</label>
        <input
            type="text"
            id="passport_region"
            name="passport_region"
            v-model="formData.passportRegion"
        />
      </div>

      <div class="form-control">
        <label for="passport_ID">Номер</label>
        <input
            type="number"
            id="passport_ID"
            name="passport_ID"
            v-model="formData.passportID"
        />
      </div>

      <div class="form-control">
        <label for="issued_by">Кем выдан</label>
        <input type="text" id="issued_by" name="issued_by" v-model="formData.issuedBy"/>
      </div>

      <div class="form-control">
        <label for="date_of_issue">Дата выдачи*</label>
        <input
            type="text"
            id="date_of_issue"
            name="date_of_issue"
            v-model.trim="formData.dateOfIssue"
            :class="{
            invalid: $v.formData.dateOfIssue.$dirty && !$v.formData.dateOfIssue.required
          }"
        />
        <small
            class="invalid"
            v-if="$v.formData.dateOfIssue.$dirty && !$v.formData.dateOfIssue.required"
        >Поле не должно быть пустым</small
        >
      </div>

      <button type="submit" class="btn primary">Отправить</button>
      <div class="card marked center" v-if="validateForm">
        <small class="primary">Клиент успешно создан!</small>
      </div>
    </form>
  </div>
</template>

<script>
import {required, helpers} from 'vuelidate/lib/validators'

const telRegex = helpers.regex('alpha', /^7\d{10}/)
export default {
  data() {
    return {
      formData: {
        surname: '',
        name: '',
        patronymic: '',
        dateBirthday: '',
        tel: '',
        gender: '',
        clientGroup: [],
        doctor: '',
        sendCheck: '',
        postcode: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',
        documentType: '',
        passportSeries: '',
        passportRegion: '',
        passportID: '',
        issuedBy: '',
        dateOfIssue: '',
      },


      validateForm: false
    }
  },
  validations: {
    formData: {
      surname: {
        required
      },
      name: {
        required
      },
      dateBirthday: {
        required
      },
      tel: {
        required,
        telRegex
      },
      clientGroup: {
        required
      },
      city: {
        required
      },
      documentType: {
        required
      },
      dateOfIssue: {
        required
      }
    }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.validateForm = true
      this.resetForm()
    },

    resetForm() {
      if (this.validateForm) {
        for (let key in this.formData) {
          if (Array.isArray(this.formData[key])) {
            this.formData[key] = []
            if(this.$v.formData[key]) {
              this.$v.formData[key].$reset()
            }
          } else {
            this.formData[key] = ''
            if(this.$v.formData[key]) {
              this.$v.formData[key].$reset()
            }
          }
        }
      }
    }
  }
}
</script>

<style>
.form-control small {
  color: #e53935;
}

.form-control.invalid input {
  border-color: #e53935;
}
</style>
