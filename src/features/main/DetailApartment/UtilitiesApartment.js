/**
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function UtilitiesApartment() {
  return (
    <View style={styles.container} >
      <Text>Căn hộ nằm tại toà R1.02 thuộc phân khu căn hộ cao cấp Ruby, nơi sở hữu vị trí đắc địa trong lòng “thành phố biển hồ” khi có giao thông kết nối dễ dàng cùng với vườn Nhật và bể bơi 4 mùa. Đặc biệt, R1.02 nổi bật với thiết kế kiến trúc ưu tiên nhiều mảng kính lớn, vừa tạo nên vẻ ngoài sang trọng, hiện đại cho cả tòa nhà, vừa mang đến tầm nhìn khoáng đạt cho từng căn hộ. Bên trong căn hộ được trang bị nội thất liền tường cao cấp đúng tiêu chuẩn anhdevs Ruby nhằm đáp ứng tối đa sở thích và gu thẩm mỹ đa dạng của khách hàng, đồng thời giúp khách hàng có thể dễ dàng tối ưu hóa công năng trong ngôi nhà của mình tùy theo mục đích sử dụng.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'white'
  },
});

export default UtilitiesApartment;
