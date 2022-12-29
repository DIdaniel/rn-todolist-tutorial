import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

// <svg
//   fill="#000000"
//   viewBox="0 0 32 32"
//   version="1.1"
//   xmlns="http://www.w3.org/2000/svg"
//   xmlns:xlink="http://www.w3.org/1999/xlink"
//   xml:space="preserve"
//   xmlns:serif="http://www.serif.com/"
//   style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
// >
//   <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//   <g id="SVGRepo_iconCarrier">
//     <path d="M11,4.5l10,0c0.828,-0 1.5,-0.672 1.5,-1.5c-0,-0.828 -0.672,-1.5 -1.5,-1.5l-10,0c-0.828,-0 -1.5,0.672 -1.5,1.5c-0,0.828 0.672,1.5 1.5,1.5Z"></path>
//     <path d="M5,9.5l0,16.5c0,2.761 2.239,5 5,5l12,0c2.761,0 5,-2.239 5,-5l0,-16.5l1.645,0c0.748,-0 1.355,-0.672 1.355,-1.5c-0,-0.828 -0.607,-1.5 -1.355,-1.5l-25.29,0c-0.748,-0 -1.355,0.672 -1.355,1.5c-0,0.828 0.607,1.5 1.355,1.5l1.645,0Zm7,3.5l0,12c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-12c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1Zm6,-0l0,12c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-12c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1Z"></path>
//   </g>
// </svg>;

export const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <Pressable style={styles.itemCheckbox} hitSlop={10}>
        <Svg width={24} height={24} fill="#000">
          <Rect
            width="20"
            height="20"
            x="2"
            y="2"
            fill="none"
            stroke="#000000"
            strokeWidth={2}
          />
        </Svg>
        <Svg width={24} height={24} fill="#000">
          <Path
            d="M2,2 L22,2 L22,22 L2,22 L2,2 Z M5,13 L10,17 L19,6"
            fill="none"
            stroke="#000000"
            strokeWidth={2}
          />
        </Svg>
      </Pressable>
      <Text style={[styles.itemText, styles.itemTextChecked]}>코딩하기</Text>
      <Pressable
        style={[styles.deleteButton, styles.deleteButtonDone]}
        hitSlop={10}
      >
        <Svg width={24} height={24} viewBox="0 0 32 32" fill="none">
          <Path
            d="M5,9.5l0,16.5c0,2.761 2.239,5 5,5l12,0c2.761,0 5,-2.239 5,-5l0,-16.5l1.645,0c0.748,-0 1.355,-0.672 1.355,-1.5c-0,-0.828 -0.607,-1.5 -1.355,-1.5l-25.29,0c-0.748,-0 -1.355,0.672 -1.355,1.5c-0,0.828 0.607,1.5 1.355,1.5l1.645,0Zm7,3.5l0,12c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-12c-0,-0.552 -0.448,-1 -1,-1c-0.552,0 -1,0.448 -1,1Zm6,-0l0,12c0,0.552 0.448,1 1,1c0.552,-0 1,-0.448 1,-1l0,-12c0,-0.552 -0.448,-1 -1,-1c-0.552,-0 -1,0.448 -1,1Z"
            stroke="#000"
            strokeWidth={2}
          />
        </Svg>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#F7F8FA'
  },
  itemCheckbox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6
  },
  itemText: {
    marginRight: 'auto',
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373'
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: 'line-through'
  },
  deleteButton: {
    opacity: 0.8
  },
  deleteButtonDone: {
    opacity: 0.3
  }
});
