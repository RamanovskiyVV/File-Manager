using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FileManager.IServices;
using FileManager.Services;

namespace FileManagerTest.Services
{
	/// <summary>
	/// FileServiceTest
	/// </summary>
	[TestClass]
	public class FileServiceTest
	{
		private IFileService fileService;
		[TestInitialize]
		public void SetupContext()
		{
			fileService = new FileService();
		}

		[TestMethod]
		[ExpectedException(typeof(ArgumentNullException))]
		public void GetFilesList_NullArgument_Test()
		{
			fileService.GetFilesList(null);
		}

		[TestMethod]
		[ExpectedException(typeof(ArgumentNullException))]
		public void Delete_File_NullArgument_Test()
		{
			fileService.Delete(null);
		}

		[TestMethod]
		[ExpectedException(typeof(ArgumentNullException))]
		public void Create_File_NullArgument_Test()
		{
			fileService.Create(null);
		}

		[TestMethod]
		[ExpectedException(typeof(ArgumentNullException))]
		public void Open_File_NullArgument_Test()
		{
			fileService.Open(null);
		}
	}
}
