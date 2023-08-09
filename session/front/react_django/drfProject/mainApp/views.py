# from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

from .serializers import BoardSerializer
from .models import Board

# Create your views here.

# Get, Post 구현
class BoardList(APIView): # 목록 보여줌
    def get(self, request): # 리스트 보여줄 때
        boards = Board.objects.all()

        serializer = BoardSerializer(boards, many=True) # 여러 개 객체 serialize 하려면 many=True
        return Response(serializer.data)

    def post(self, request): # 새 글 작성 시
        serializer = BoardSerializer(
            data=request.data) # request.data는 사용자 입력 데이터
        if serializer.is_valid(): # 유효성 검사
            serializer.save() # 저장
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Get, Put, Delete 구현
class BoardDetail(APIView):
    def get_object(self, pk): # Board 객체 가져오기
        try:
            return Board.objects.get(pk=pk)
        except Board.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None): # Board detail 보기
        board = self.get_object(pk)
        serializer = BoardSerializer(board)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None): # Board 수정하기
        board = self.get_object(pk)
        serializer = BoardSerializer(board, data=request.data)
        if serializer.is_valid(): # 유효성 검사
            serializer.save() # 저장
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None): # Board 삭제하기
        board = self.get_object(pk)
        board.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)