# Binary Tree and Binary Search Tree implementation in Python
# Includes both simple binary tree and BST with traversal methods

from typing import List, Optional


# Simple Binary Tree Node
class BinaryTreeNode:
    def __init__(self, data: int):
        self.data = data
        self.left = None
        self.right = None

    def insert_left(self, data: int) -> None:
        if self.left is None:
            self.left = BinaryTreeNode(data)
        else:
            temp = BinaryTreeNode(data)
            temp.left = self.left
            self.left = temp

    def insert_right(self, data: int) -> None:
        if self.right is None:
            self.right = BinaryTreeNode(data)
        else:
            temp = BinaryTreeNode(data)
            temp.right = self.right
            self.right = temp

    def get_right(self) -> Optional["BinaryTreeNode"]:
        return self.right

    def get_left(self) -> Optional["BinaryTreeNode"]:
        return self.left

    def get_data(self) -> int:
        return self.data


# Binary Search Tree Node
class BSTNode:
    def __init__(self, data: int):
        self.data = data
        self.left = None
        self.right = None


# Binary Search Tree Class
class BinarySearchTree:
    def __init__(self):
        self.root = None

    def insert(self, data: int) -> None:
        new_node = BSTNode(data)
        if not self.root:
            self.root = new_node
            return
        self._insert_node(self.root, new_node)

    def _insert_node(self, node: BSTNode, new_node: BSTNode) -> None:
        if new_node.data < node.data:
            if not node.left:
                node.left = new_node
            else:
                self._insert_node(node.left, new_node)
        else:
            if not node.right:
                node.right = new_node
            else:
                self._insert_node(node.right, new_node)

    def search(self, data: int) -> Optional[BSTNode]:
        return self._search_node(self.root, data)

    def _search_node(self, node: Optional[BSTNode], data: int) -> Optional[BSTNode]:
        if not node:
            return None
        if data < node.data:
            return self._search_node(node.left, data)
        elif data > node.data:
            return self._search_node(node.right, data)
        else:
            return node

    def remove(self, data: int) -> None:
        self.root = self._remove_node(self.root, data)

    def _remove_node(self, node: Optional[BSTNode], data: int) -> Optional[BSTNode]:
        if not node:
            return None
        if data < node.data:
            node.left = self._remove_node(node.left, data)
        elif data > node.data:
            node.right = self._remove_node(node.right, data)
        else:
            if not node.left and not node.right:
                return None
            elif not node.left:
                return node.right
            elif not node.right:
                return node.left
            else:
                min_node = self._find_min(node.right)
                node.data = min_node.data
                node.right = self._remove_node(node.right, min_node.data)
        return node

    def _find_min(self, node: BSTNode) -> BSTNode:
        while node.left:
            node = node.left
        return node

    # BST Traversals
    def in_order_traversal(
        self, node: Optional[BSTNode] = None, result: Optional[List[int]] = None
    ) -> List[int]:
        if result is None:
            result = []
        if node is None:
            node = self.root

        if node:
            self.in_order_traversal(node.left, result)
            result.append(node.data)
            self.in_order_traversal(node.right, result)
        return result

    def pre_order_traversal(
        self, node: Optional[BSTNode] = None, result: Optional[List[int]] = None
    ) -> List[int]:
        if result is None:
            result = []
        if node is None:
            node = self.root

        if node:
            result.append(node.data)
            self.pre_order_traversal(node.left, result)
            self.pre_order_traversal(node.right, result)
        return result

    def post_order_traversal(
        self, node: Optional[BSTNode] = None, result: Optional[List[int]] = None
    ) -> List[int]:
        if result is None:
            result = []
        if node is None:
            node = self.root

        if node:
            self.post_order_traversal(node.left, result)
            self.post_order_traversal(node.right, result)
            result.append(node.data)
        return result


# Simple Binary Tree Traversal Functions
def preorder(tree: Optional[BinaryTreeNode]) -> None:
    if tree:
        print(tree.data)
        preorder(tree.left)
        preorder(tree.right)


def inorder(tree: Optional[BinaryTreeNode]) -> None:
    if tree:
        inorder(tree.left)
        print(tree.data)
        inorder(tree.right)


def postorder(tree: Optional[BinaryTreeNode]) -> None:
    if tree:
        postorder(tree.left)
        postorder(tree.right)
        print(tree.data)


# Example usage
if __name__ == "__main__":
    # Test Binary Search Tree
    bst = BinarySearchTree()
    bst.insert(50)
    bst.insert(30)
    bst.insert(70)
    bst.insert(20)
    bst.insert(40)
    bst.insert(60)
    bst.insert(80)

    print("In-order traversal:", bst.in_order_traversal())
    print("Pre-order traversal:", bst.pre_order_traversal())
    print("Post-order traversal:", bst.post_order_traversal())

    # Test simple binary tree
    root = BinaryTreeNode(1)
    root.insert_left(2)
    root.insert_right(3)
    root.get_left().insert_left(4)
    root.get_left().insert_right(5)

    print("\nSimple Binary Tree Pre-order:")
    preorder(root)
