using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using FileManager.Services;
using FileManager.IServices;
using FileManager.Infrastructure;

namespace FileManagerTest.Services
{
	/// <summary>
	///IDirectoryService test
	/// </summary>
	[TestClass]
	public class DirectoryServiceTest
	{
		/// <summary>
		/// directory Service
		/// </summary>
		private IDirectoryService directoryService;

		/// <summary>
		/// Test Initialize
		/// </summary>
		[TestInitialize]
		public void SetupContext()
		{
			directoryService = new DirectoryService();
		}

		/// <summary>
		/// test GetDirectories method with null argument
		/// </summary>
		[TestMethod]
		[ExpectedException(typeof(ArgumentNullException))]
		public void GetDirectories_NullArgument_Test()
		{
			directoryService.GetDirectoriesList(null);
		}

		/// <summary>
		/// Delete directory null argument test
		/// </summary>
		[TestMethod]
		[ExpectedException(typeof(ArgumentNullException))]
		public void Delete_Directory_NullArgument_Test()
		{
			directoryService.Delete(null);
		}

		/// <summary>
		/// Create directory nullArgument test
		/// </summary>
		[TestMethod]
		[ExpectedException(typeof(ArgumentNullException))]
		public void Create_Directory_NullArgument_Test()
		{
			directoryService.Create(null);
		}

		/// <summary>
		/// IsDirectoryType Null Argument test
		/// </summary>
		/// <param name="type"></param>
		/// <param name="result"></param>
		[TestMethod]
		[DataRow("directory", true)]
		[DataRow("file", false)]
		public void IsDirectoryType_NullArgument_Test(string type, bool result)
		{
			Assert.AreEqual(directoryService.IsDirectoryType(type), result);
		}
	}
}
